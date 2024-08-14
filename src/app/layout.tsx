import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import FooterSection from "@/components/sections/FooterSection";
import NavBar from "@/components/common/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Choudhary Facilities - UAE Visas, Hotels, Flights, Tour Packages",
  description:
    "Choudhary Facilities Management Service offers top-notch visa processing, international flights, hotel bookings, travel insurance, and personalized UAE city tours, ensuring a seamless and stress-free experience for all your travel needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={[poppins.className, volkhov.className].toString()}>
        <div>
          <NavBar />
          {children}
          <div className="md:px-[9rem]">
            <NewsLetterSection />
            <div className="relative md:mt-[7.69rem] mt-8">
              <FooterSection />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
