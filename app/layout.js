import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Laptop Selector",
  description: "powered by Sabbir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:mx-5">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
