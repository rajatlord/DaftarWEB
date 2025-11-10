// "use client";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ChatBot from "@/components/Chatbot/ChatBot";
// import Head from "next/head";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Daftar Route",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => setLoading(false), 700);
  //   return () => clearTimeout(timer);
  // }, [pathname]);
  return (
    <html lang="en" suppressHydrationWarning style={{ margin: 0, padding: 0 , boxSizing: 'border-box', overflowX:"hidden" }}>
            {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}

      <body style={{ margin: 0, padding: 0 , boxSizing: 'border-box', overflowX:"hidden" }} >

        <Header />
        {/* {loading && (
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        )} */}
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
