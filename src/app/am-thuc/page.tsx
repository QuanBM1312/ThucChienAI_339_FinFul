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

const dishes = [
  {
    name: 'Cá nướng (Pa pỉnh tộp)',
    shortDescription: 'Cá được tẩm ướp gia vị đặc trưng của người Thái, nướng trên than hồng.',
    longDescription: 'Pà Pỉnh Tộp là món ăn không thể thiếu trong các dịp lễ hội của người Thái. Cá chép tươi được mổ dọc sống lưng, tẩm ướp với các loại gia vị núi rừng như mắc khén, gừng, sả, sau đó kẹp vào que tre và nướng trên than hồng cho đến khi vàng ruộm. Món ăn có vị ngọt của cá, thơm của gia vị, tạo nên một trải nghiệm ẩm thực khó quên.',
    imageUrl: 'https://media.baovanhoa.vn/zoom/600_400/Portals/0/EasyGalleryImages/1/48506/IMG_5760.JPG',
  },
  {
    name: 'Cơm Lam',
    shortDescription: 'Gạo nếp được nấu trong ống tre, mang hương thơm của tre nứa hòa quyện với vị dẻo của gạo.',
    longDescription: 'Cơm lam là món ăn dân dã nhưng đầy tinh tế. Gạo nếp nương được vo sạch, cho vào ống tre non cùng một chút nước và muối, sau đó nướng trên lửa. Khi chín, hạt cơm dẻo thơm, quyện với mùi thơm của tre, thường được ăn kèm với muối vừng hoặc thịt nướng.',
    imageUrl: 'https://bna.1cdn.vn/2023/12/06/uploaded-thanhthuybna-2023_12_06-_bna-anh-3-2986.jpg',
  },
  {
    name: 'Xôi ngũ sắc',
    shortDescription: 'Món ăn không thể thiếu trong các dịp lễ hội, tượng trưng cho ngũ hành và ước vọng về một cuộc sống ấm no, hạnh phúc.',
    longDescription: 'Xôi có 5 màu (trắng, đỏ, xanh, tím, vàng) được tạo nên từ các loại lá cây rừng, an toàn và có hương vị rất đặc trưng. Món ăn không thể thiếu trong các dịp lễ hội, tượng trưng cho ngũ hành và ước vọng về một cuộc sống ấm no, hạnh phúc.',
    imageUrl: 'https://thittraugacbep.com.vn/wp-content/uploads/2025/08/xoi-ngu-sac-2.jpg',
  },
];

export default function AmThucPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Khám Phá Ẩm Thực Địa Phương
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <Dialog key={dish.name}>
            <DialogTrigger asChild>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Image
                  src={dish.imageUrl}
                  alt={dish.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{dish.name}</h3>
                  <p className="text-gray-700">{dish.shortDescription}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] p-0">
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="text-2xl font-bold text-gray-900">{dish.name}</DialogTitle>
                <DialogDescription>
                  {dish.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <hr />
              <div className="p-6 pt-4">
                <Image
                  src={dish.imageUrl}
                  alt={dish.name}
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 leading-relaxed">
                  {dish.longDescription}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
