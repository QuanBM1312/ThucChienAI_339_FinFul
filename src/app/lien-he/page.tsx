import { Button } from "@/components/ui/button";

export default function LienHePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Liên Hệ Với Chúng Tôi
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và Tên</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nội Dung</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
            </div>
            <Button type="submit">Gửi</Button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>Địa chỉ:</strong> Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An</p>
            <p><strong>Email:</strong> info@dulichyenhoa.com</p>
            <p><strong>Điện thoại:</strong> (+84) 123 456 789</p>
          </div>
          <div className="mt-8 aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30088.70117951178!2d104.3833333!3d19.5000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313a5a5a5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2zTcOG7uBMw70sIEvhu7MgU8ahbiwgTmdo4buHIEFuLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1678886400000!5m2!1svi!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
