import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/bg_img.jpg'

export default function Home() {
  const attractions = [
    {
      name: 'Dòng Sông Yên Bình',
      description: 'Chèo thuyền kayak và tận hưởng không khí trong lành.',
      imageUrl: 'https://bna.1cdn.vn/2023/12/06/uploaded-thanhthuybna-2023_12_06-_bna-anh-7-3422.jpg',
    },
    {
      name: 'Lễ hội Tết Hoa Quả',
      description: 'Đây là lễ hội lớn nhất trong năm, là dịp để người dân tạ ơn trời đất, tổ tiên đã ban cho mưa thuận gió hòa, mùa màng bội thu.',
      imageUrl: 'https://cdnphoto.dantri.com.vn/g4Mzf61g8BnBOydlqXqrHS0OcwY=/thumb_w/1360/2022/09/21/tethoa-quamy-lyky-sonnghe-an3-1663776722762.jpeg',
    },
    {
      name: 'Văn Hóa Bản Làng',
      description: 'Khám phá những nét văn hóa đặc sắc của đồng bào dân tộc Thái.',
      imageUrl: 'https://bna.1cdn.vn/2023/12/06/uploaded-thanhthuybna-2023_12_06-_bna-anh-8-2952.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-5xl font-extrabold">Khám phá Bản Yên Hoà</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Viên ngọc ẩn mình nơi miền Tây xứ Nghệ
          </p>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Những Trải Nghiệm Không Thể Bỏ Lỡ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
