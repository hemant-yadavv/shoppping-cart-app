import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/Context/AppContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping Cart",
  description: "This is a Shopping Cart Application made as a Assigment for Profile fyi",
  icons: '/shop_logo.gif',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AppContextProvider>
          <Toaster
            position="bottom-right"
            reverseOrder={true}
          />
          <Navbar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}