import base64
import os
import time
import requests
from typing import Optional, List, Dict


class VeoVideoGenerator:
    def __init__(self, base_url: str = "https://api.thucchien.ai/gemini/v1beta",
                 api_key: str = "sk-svZh1lCgLxuIJ_byTpiEgg"):
        self.base_url = base_url
        self.api_key = api_key
        self.headers = {
            "x-goog-api-key": api_key,
            "Content-Type": "application/json"
        }

    def encode_image_field(self, image_path: str) -> Dict:
        """Encode image file to dict with base64 and mimeType for API."""
        with open(image_path, "rb") as f:
            img_bytes = f.read()
        base64_str = base64.b64encode(img_bytes).decode("utf-8")

        ext = os.path.splitext(image_path)[1].lower()
        if ext in [".jpg", ".jpeg"]:
            mime = "image/jpeg"
        elif ext == ".png":
            mime = "image/png"
        else:
            mime = "application/octet-stream"

        return {
            "bytesBase64Encoded": base64_str,
            "mimeType": mime
        }

    def generate_video(self,
                       prompt: str,
                       image_path: Optional[str] = None,
                       last_frame_path: Optional[str] = None,
                       parameters: Optional[dict] = None
                      ) -> Optional[str]:
        print(f"🎬 Generating video with prompt: '{prompt}'")

        url = f"{self.base_url}/models/veo-3.0-generate-001:predictLongRunning"

        instance = {
            "prompt": prompt
        }

        if image_path:
            instance["image"] = self.encode_image_field(image_path)
        if last_frame_path:
            instance["lastFrame"] = self.encode_image_field(last_frame_path)

        payload = {
            "instances": [instance],
            "parameters": parameters or {}
        }

        try:
            response = requests.post(url, headers=self.headers, json=payload)
            response.raise_for_status()

            data = response.json()
            operation_name = data.get("name")

            if operation_name:
                print(f"✅ Video generation started: {operation_name}")
                return operation_name
            else:
                print("❌ No operation name returned")
                print(f"Response: {data}")
                return None

        except requests.RequestException as e:
            print(f"❌ Failed to start video generation: {e}")
            if hasattr(e, 'response') and e.response is not None:
                try:
                    error_data = e.response.json()
                    print(f"Error details: {error_data}")
                except:
                    print(f"Error response: {e.response.text}")
            return None

    def wait_for_completion(self, operation_name: str, max_wait_time: int = 600) -> Optional[str]:
        print("⏳ Waiting for video generation to complete...")

        operation_url = f"{self.base_url}/{operation_name}"
        start_time = time.time()
        poll_interval = 10  # seconds

        while time.time() - start_time < max_wait_time:
            try:
                print(f"🔍 Polling status... ({int(time.time() - start_time)}s elapsed)")
                response = requests.get(operation_url, headers=self.headers)
                response.raise_for_status()
                data = response.json()

                if "error" in data:
                    print("❌ Error in video generation:")
                    print(data["error"])
                    return None

                if data.get("done", False):
                    print("🎉 Video generation complete!")
                    try:
                        video_uri = data["response"]["generateVideoResponse"]["generatedSamples"][0]["video"]["uri"]
                        print(f"📹 Video URI: {video_uri}")
                        return video_uri
                    except KeyError as e:
                        print(f"❌ Could not extract video URI: {e}")
                        print("Full response:")
                        print(data)
                        return None

                time.sleep(poll_interval)
                poll_interval = min(poll_interval * 1.2, 30)

            except requests.RequestException as e:
                print(f"❌ Error polling operation status: {e}")
                time.sleep(poll_interval)

        print(f"⏰ Timeout after {max_wait_time} seconds")
        return None

    def download_video(self, video_uri: str, output_filename: str = "generated_video.mp4") -> bool:
        print(f"⬇️ Downloading video from {video_uri}")

        if video_uri.startswith("https://generativelanguage.googleapis.com/"):
            relative_path = video_uri.replace("https://generativelanguage.googleapis.com/", "")
        else:
            relative_path = video_uri

        if self.base_url.endswith("/v1beta"):
            base_path = self.base_url.replace("/v1beta", "/download")
        else:
            base_path = self.base_url

        download_url = f"{base_path}/{relative_path}"
        print(f"Download URL: {download_url}")

        try:
            response = requests.get(download_url, headers=self.headers, stream=True, allow_redirects=True)
            response.raise_for_status()

            with open(output_filename, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)

            if os.path.exists(output_filename) and os.path.getsize(output_filename) > 0:
                print(f"✅ Video downloaded successfully: {output_filename}")
                return True
            else:
                print("❌ Downloaded file is empty or missing.")
                return False

        except requests.RequestException as e:
            print(f"❌ Download failed: {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Status code: {e.response.status_code}")
                print(f"Response headers: {dict(e.response.headers)}")
            return False

    def generate_and_download(self,
                              prompt: str,
                              image_path: Optional[str] = None,
                              last_frame_path: Optional[str] = None,
                              parameters: Optional[dict] = None,
                              output_filename: Optional[str] = None
                             ) -> bool:
        if output_filename is None:
            timestamp = int(time.time())
            safe_prompt = "".join(c for c in prompt[:30] if c.isalnum() or c in (' ', '-', '_')).rstrip()
            output_filename = f"veo_video_{safe_prompt.replace(' ', '_')}_{timestamp}.mp4"

        print("=" * 60)
        print("🎬 VEO VIDEO GENERATION WORKFLOW")
        print("=" * 60)

        operation_name = self.generate_video(prompt, image_path, last_frame_path, parameters)
        if not operation_name:
            print("❌ Failed to start video generation.")
            return False

        video_uri = self.wait_for_completion(operation_name)
        if not video_uri:
            print("❌ Video generation did not complete successfully.")
            return False

        success = self.download_video(video_uri, output_filename)
        if success:
            print("=" * 60)
            print("🎉 SUCCESS! Video generation complete!")
            print(f"📁 Video saved as: {output_filename}")
            print("=" * 60)
        else:
            print("=" * 60)
            print("❌ FAILED! Video download failed.")
            print("=" * 60)

        return success


def main():
    base_url = os.getenv("LITELLM_BASE_URL", "https://api.thucchien.ai/gemini/v1beta")
    api_key = os.getenv("LITELLM_API_KEY", "sk-svZh1lCgLxuIJ_byTpiEgg")

    generator = VeoVideoGenerator(base_url=base_url, api_key=api_key)

    prompt = """Yêu cầu tổng thể: Từ hình ảnh được cung cấp, hãy tạo một video cinematic chất lượng cao, độ phân giải Full HD (1080p), tỷ lệ 16:9, thời lượng khoảng 15-20 giây. Video phải truyền tải được không khí vui tươi, đậm đà bản sắc văn hóa và vẻ đẹp thiên nhiên yên bình của địa điểm.1. Phân tích và Mô tả Bối cảnh (Scene Analysis & Description):
Chủ thể chính: Một nhóm phụ nữ dân tộc Thái đang biểu diễn điệu múa sạp truyền thống.
Trang phục: Các cô gái mặc áo trắng cách điệu và váy thổ cẩm dệt tay với hoa văn sặc sỡ, đầy màu sắc.
Bối cảnh: Không gian ngoài trời, dưới những tán cây xanh mát. Phía sau là một ngọn tháp cổ kính, rêu phong (Tháp cổ Xốp Lợt) tạo nên chiều sâu lịch sử. Bầu trời xanh, có mây trắng nhẹ. Ánh sáng tự nhiên, mềm mại, có thể là ánh nắng cuối buổi chiều.
Không khí: Vui vẻ, sống động, chân thực, tràn đầy sức sống và niềm tự hào văn hóa.
2. Yêu cầu về Animation (Chuyển động):
Chuyển động chính (Nhân vật):
Các cô gái đang nhảy: Animate chuyển động của các cô gái đang nhảy sạp một cách nhịp nhàng và duyên dáng. Họ nhảy lên, chân co, chân duỗi theo nhịp, tránh các thanh tre. Chuyển động phải mượt mà, không cứng nhắc.
Váy và khăn: Váy thổ cẩm và những chiếc khăn màu sắc trên tay các cô gái phải tung bay nhẹ nhàng theo mỗi bước nhảy, tạo cảm giác uyển chuyển và sống động.
Biểu cảm: Khuôn mặt các cô gái phải thể hiện được nụ cười rạng rỡ, ánh mắt tập trung nhưng vẫn toát lên niềm vui và sự thoải mái.
Các cô gái đang gõ sạp: Animate chuyển động của hai nhóm phụ nữ ngồi hai bên, tay họ cầm các thanh tre gõ vào nhau và gõ xuống thanh tre kê bên dưới, tạo ra nhịp điệu đều đặn. Chuyển động tay phải dứt khoát và đồng bộ.
Chuyển động phụ (Môi trường):
Gió và Cây cối: Tạo ra một làn gió nhẹ làm lay động những tán lá cây ở phía trước và phía sau. Lá cây có thể khẽ rung rinh, một vài chiếc lá có thể bay nhẹ trong không khí.
Ánh sáng và Bóng đổ: Tạo ra sự thay đổi tinh tế của ánh sáng mặt trời khi có những đám mây mỏng lướt qua. Bóng của người và cây cối trên mặt đất có thể dịch chuyển một cách cực kỳ nhẹ nhàng, không đáng kể.
Hiệu ứng chiều sâu: Thêm hiệu ứng "Parallax" rất nhẹ. Khi máy quay di chuyển, lớp cây cối ở gần sẽ di chuyển nhanh hơn một chút so với ngọn tháp cổ ở phía xa, tạo cảm giác không gian ba chiều.
3. Yêu cầu về Kỹ thuật Quay phim (Cinematography):
Bắt đầu: Video bắt đầu với góc quay chính xác như trong ảnh tĩnh.
Chuyển động máy quay: Sau 2 giây, máy quay bắt đầu một chuyển động zoom-in cực kỳ chậm (slow dolly-in) về phía nhóm nhảy ở trung tâm. Đồng thời, máy quay lia nhẹ (pan) sang phải một chút để bao quát được cả những người đang gõ sạp. Chuyển động phải thật mượt và ổn định.
Lấy nét: Giữ cho nhóm nhảy luôn là tâm điểm và được lấy nét rõ ràng. Hậu cảnh (ngọn tháp) có thể hơi mờ đi một chút (hiệu ứng xóa phông nhẹ - subtle bokeh) khi máy quay zoom lại gần để làm nổi bật chủ thể.
Slow-motion: Khoảng giây thứ 10-13, đưa vào một đoạn slow-motion (chuyển động chậm) ngắn (khoảng 2-3 giây), tập trung vào khoảnh khắc một cô gái đang nhảy lên không trung, tà váy và chiếc khăn tung bay đẹp mắt. Sau đó, video trở lại tốc độ bình thường.
4. Yêu cầu về Âm thanh (Audio Design):
Âm thanh nền (Ambiance): Tiếng gió xào xạc qua kẽ lá, tiếng chim hót líu lo từ xa. Âm thanh phải tự nhiên và tạo cảm giác yên bình.
Âm thanh chính (Diegetic Sound):
Tiếng gõ sạp phải là âm thanh chủ đạo: "cắc... cắc... cắc", rõ ràng, nhịp nhàng và đều đặn.
Tiếng cười nói vui vẻ, tự nhiên của các cô gái (không quá to, hòa quyện vào không khí chung).
Tiếng bước chân nhẹ nhàng khi tiếp đất.
Nhạc nền (Soundtrack): Lồng ghép một bản nhạc không lời mang âm hưởng dân ca miền núi phía Bắc Việt Nam. Sử dụng các nhạc cụ truyền thống như sáo trúc, đàn tính. Nhạc nền phải du dương, trong sáng, có nhịp điệu tươi vui nhưng không lấn át âm thanh tự nhiên của bối cảnh. Âm lượng nhạc nền tăng nhẹ trong đoạn slow-motion để tạo cảm xúc.

    
    """

    image_path = "dance_tower.jpg"          # Thay bằng đường dẫn ảnh chính
    last_frame_path = ""
    # last_frame_path = "img_khungCanh/generated_image_1761206715.png" # Thay bằng đường dẫn ảnh lastFrame

    parameters = {
        "aspectRatio": "16:9",
        "durationSeconds": 8,      

    }


    timestamp = int(time.time())
    success = generator.generate_and_download(
        prompt=prompt,
        image_path=image_path,
        last_frame_path=last_frame_path,
        parameters=parameters,
        output_filename=f"video_frame__{timestamp}.mp4"
    )

    if success:
        print("✅ Video generation & download succeeded.")
    else:
        print("❌ Video generation & download failed.")


if __name__ == "__main__":
    main()
