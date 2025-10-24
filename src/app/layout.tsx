import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Du Lịch Bản Yên Hòa - Khám Phá Vẻ Đẹp Nghệ An",
  description: "Website quảng bá du lịch cho Bản Yên Hoà, Xã Mỹ Lý, Tỉnh Nghệ An. Khám phá thông tin đầy đủ và tin cậy về điểm đến, ẩm thực và văn hóa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
