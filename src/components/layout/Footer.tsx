import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="mailto:info@dulichyenhoa.com" className="flex items-center text-gray-300 hover:text-white">
            <Mail className="mr-2" size={18} />
            info@dulichyenhoa.com
          </a>
          <a href="tel:+84123456789" className="flex items-center text-gray-300 hover:text-white">
            <Phone className="mr-2" size={18} />
            (+84) 123 456 789
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 Du Lịch Yên Hòa. Mọi quyền được bảo lưu.</p>
        <p className="mt-2 text-sm text-gray-500">
          Một sản phẩm công nghệ dành tặng cho cộng đồng Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An.
        </p>
      </div>
    </footer>
  );
}
