import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductsProvider } from "@/context/context";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Next store",
  description: "Made by Fomes",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductsProvider>
      <html lang="en" style={{ height: "100%" }}>
        <body
          className={montserrat.className}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%" /* Ajuste a altura conforme necessário */,
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <NavBar></NavBar>
          {children}
          <Footer />
        </body>
      </html>
    </ProductsProvider>
  );
}
