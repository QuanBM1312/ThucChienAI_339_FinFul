"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookTourModal } from './BookTourModal';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}
  `;

  const linkClasses = `
    font-medium transition-colors
    ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-gray-200'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-green-800' : 'text-white'}`}>
          Du Lịch Yên Hòa
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className={linkClasses}>
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link href="/gioi-thieu" className={linkClasses}>
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link href="/diem-den" className={linkClasses}>
                Điểm Đến
              </Link>
            </li>
            <li>
              <Link href="/am-thuc" className={linkClasses}>
                Ẩm Thực
              </Link>
            </li>
            <li>
              <Link href="/lien-he" className={linkClasses}>
                Liên Hệ
              </Link>
            </li>
          </ul>
          <BookTourModal>
            <Button>Đặt Tour</Button>
          </BookTourModal>
        </nav>
      </div>
    </header>
  );
}
