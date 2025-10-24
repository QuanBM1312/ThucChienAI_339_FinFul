"use client";

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const attractions = [
  {
    name: 'Tháp cổ Xốp Lợt',
    shortDescription: 'Tháp không chỉ là một điểm tham quan lịch sử mà còn là một nơi sinh hoạt văn hóa, tâm linh quan trọng của cộng đồng địa phương.',
    longDescription: 'Là một di tích kiến trúc nghệ thuật cấp tỉnh, Tháp cổ Xốp Lợt có niên đại hơn 1.000 năm tuổi. Đây là một công trình cổ kính, minh chứng cho một giai đoạn lịch sử và giao thoa văn hóa lâu đời tại vùng đất này.',
    imageUrl: 'https://datafiles.nghean.gov.vn/nan-ubnd/2910/quantritintuc20257/z6803439857589_3378f8423e6c373475429045fad6641c.jpg',
  },
  {
    name: 'Làng nghề dệt thổ cẩm Bản Yên Hoà',
    shortDescription: 'Khám phá cuộc sống của người dân bản địa và nghề dệt thổ cẩm truyền thống.',
    longDescription: ' Bản thân làng nghề chính là một điểm tham quan hấp dẫn, nơi du khách có thể tìm hiểu về một nghề thủ công truyền thống đặc sắc. Chiêm ngưỡng những ngôi nhà sàn truyền thống của người Thái, một nét kiến trúc độc đáo hòa quyện với cảnh quan thiên nhiên',
    imageUrl: 'https://bna.1cdn.vn/2023/12/06/uploaded-thanhthuybna-2023_12_06-_bna-anh-11-4324.jpg',
  },
  {
    name: 'Dòng sông Nậm Nơn',
    shortDescription: 'Sông Nậm Nơn uốn lượn quanh co bên những dãy núi trùng điệp, tạo nên một khung cảnh sơn thủy hữu tình, hoang sơ và vô cùng yên bình.',
    longDescription: 'Du khách có thể tham gia nhiều hoạt động hấp dẫn trên sông như: Thong thả xuôi dòng trên những chiếc thuyền độc mộc để chiêm ngưỡng vẻ đẹp của núi rừng miền Tây xứ Nghệ; Tự mình khám phá những góc khuất, những vẻ đẹp tiềm ẩn của dòng sông;  Khám phá nếp sống của người dân bản địa dọc hai bên bờ sông',
    imageUrl: 'https://images.baodantoc.vn/uploads/2023/Thang-10/Ngay-16/Thanh-Hai/Ng%C3%A3%20ba%20s%C3%B4ng%20%E1%BB%9F%20c%E1%BB%ADa%20R%C3%A0o.jpg',
  },
];

export default function DiemDenPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Những Điểm Đến Không Thể Bỏ Lỡ
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction) => (
          <Dialog key={attraction.name}>
            <DialogTrigger asChild>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-700">{attraction.shortDescription}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] p-0">
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="text-2xl font-bold text-gray-900">{attraction.name}</DialogTitle>
                <DialogDescription>
                  {attraction.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <hr />
              <div className="p-6 pt-4">
                <Image
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                  {attraction.longDescription}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
