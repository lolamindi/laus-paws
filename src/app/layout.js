import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lau's Paws",
  description: "Registered Dog Boarding service in Leicester, UK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
