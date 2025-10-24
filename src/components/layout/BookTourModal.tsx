"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export function BookTourModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-full min-h-[400px] hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1974&auto=format&fit=crop"
              alt="Tour Booking"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="p-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">Đặt Tour Khám Phá</DialogTitle>
              <DialogDescription>
                Vui lòng để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất.
              </DialogDescription>
            </DialogHeader>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="tour-name" className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                <input type="text" id="tour-name" name="tour-name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="tour-email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="tour-email" name="tour-email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="tour-phone" className="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
                <input type="tel" id="tour-phone" name="tour-phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
              </div>
              <Button type="submit" className="w-full">Gửi Yêu Cầu</Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
