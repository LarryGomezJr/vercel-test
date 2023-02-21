import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to my blog</h1>
      </div>
    </>
  );
}
