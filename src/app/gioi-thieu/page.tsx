import Image from 'next/image';
import { MapPin, Star, Zap, BookOpen, Calendar } from 'lucide-react';

const Section = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="mb-12">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-3xl font-bold text-gray-800 ml-3">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default function GioiThieuPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Giới Thiệu Về Bản Yên Hòa
      </h1>

      {/* Original Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image 
            src="https://dbndnghean.vn/dbndna-media/24/3/14/bna-thap-co-yen-hoa-my-ly-anh-tu-lieu-thanh-cuong-9205jpg.webp"
            alt="Vẻ đẹp Yên Hòa"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            Yên Hòa là một bản làng xinh đẹp nép mình giữa núi rừng hùng vĩ của xã Mỹ Lý, huyện Kỳ Sơn, tỉnh Nghệ An. Nơi đây là mái nhà chung của đồng bào dân tộc Thái, với những nếp nhà sàn truyền thống, những phong tục tập quán độc đáo và một nền văn hóa đậm đà bản sắc.
          </p>
          <p>
            Đến với Yên Hòa, du khách sẽ được hòa mình vào không gian thiên nhiên trong lành, yên bình, tạm xa rời những ồn ào, náo nhiệt của phố thị. Con người nơi đây hiền hòa, mến khách, luôn chào đón du khách bằng nụ cười thân thiện và tấm lòng chân thành.
          </p>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      {/* Detailed Sections */}
      <div>
        {/* Vị trí địa lý */}
        <Section icon={<MapPin className="text-green-600" size={32} />} title="Vị Trí Địa Lý">
          <p className="mb-4">
            Bản Yên Hòa tọa lạc tại xã Mỹ Lý, một xã biên giới của huyện Kỳ Sơn, tỉnh Nghệ An. Nằm ẩn mình giữa những dãy núi trập trùng và dòng sông Nậm Nơn hiền hòa, Yên Hòa mang một vẻ đẹp hoang sơ, tách biệt với thế giới bên ngoài.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30088.70117951178!2d104.3833333!3d19.5000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313a5a5a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2zTcOG7uBMw70sIEvhu7MgU8ahbiwgTmdo4buHIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678886400000!5m2!1svi!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </Section>

        {/* Điểm nổi bật */}
        <Section icon={<Star className="text-yellow-500" size={32} />} title="Lý Do Nên Ghé Thăm">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Thiên nhiên hoang sơ:</strong> Tận hưởng không khí trong lành, cảnh quan núi rừng hùng vĩ và những dòng suối mát rượi.</li>
            <li><strong>Văn hóa bản địa:</strong> Trải nghiệm cuộc sống chân thực của người dân tộc Thái, khám phá phong tục và lễ hội truyền thống.</li>
            <li><strong>Sự yên bình:</strong> Là nơi lý tưởng để thoát khỏi sự hối hả của cuộc sống thành thị, tìm lại sự cân bằng và thư thái trong tâm hồn.</li>
            <li><strong>Con người thân thiện:</strong> Người dân Yên Hòa luôn nồng hậu, mến khách, sẵn sàng chia sẻ câu chuyện về mảnh đất quê hương.</li>
          </ul>
        </Section>

        {/* Hoạt động & Trải nghiệm */}
        <Section icon={<Zap className="text-blue-500" size={32} />} title="Hoạt Động & Trải Nghiệm">
          <ul className="list-disc list-inside space-y-2">
            <li>Đi bộ trekking qua những cánh rừng nguyên sinh.</li>
            <li>Tắm suối và chèo thuyền kayak trên sông Nậm Nơn.</li>
            <li>Tham gia các lớp học dệt thổ cẩm và nấu ăn cùng người dân địa phương.</li>
            <li>Thưởng thức đêm lửa trại và giao lưu văn nghệ cồng chiêng.</li>
          </ul>
        </Section>

        {/* Văn hóa & Lịch sử */}
        <Section icon={<BookOpen className="text-purple-500" size={32} />} title="Văn Hóa & Lịch Sử">
          <p>
            Yên Hòa là nơi lưu giữ nhiều giá trị văn hóa truyền thống của người Thái. Từ kiến trúc nhà sàn độc đáo, trang phục thổ cẩm rực rỡ, cho đến các làn điệu dân ca và lễ hội cộng đồng, tất cả đều tạo nên một bức tranh văn hóa đa dạng và phong phú, chờ đợi du khách khám phá.
          </p>
        </Section>

        {/* Thời điểm lý tưởng */}
        <Section icon={<Calendar className="text-red-500" size={32} />} title="Thời Điểm Lý Tưởng">
          <p>
            Bạn có thể ghé thăm Yên Hòa vào bất kỳ mùa nào trong năm. Tuy nhiên, thời điểm đẹp nhất là vào <strong>mùa xuân (tháng 3 - 4)</strong> khi hoa ban nở trắng rừng và <strong>mùa lúa chín (tháng 9 - 10)</strong> khi những thửa ruộng bậc thang khoác lên mình màu vàng óng ả.
          </p>
        </Section>
      </div>
    </div>
  );
}
