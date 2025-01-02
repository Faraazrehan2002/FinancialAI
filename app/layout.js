import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "FinAI",
  description: "AI-Powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className}`}>
          {/* header */}
          <Header/>

          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                Made by Faraaz Rehan Junaidi Mohammed
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
