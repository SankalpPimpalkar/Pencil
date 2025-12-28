import Footer from "@/components/ui/landing-page/Footer";
import Navbar from "@/components/ui/landing-page/Navbar";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />

      <main className="w-full h-full flex-1 flex flex-col items-center text-center px-6 pt-24">
        <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl">
          Thoughts, stories, and ideas worth sharing.
        </h1>

        <p className="mt-4 text-base-content/70 max-w-xl">
          Reflections on life, work, and everything in between.
        </p>

        <div className="my-16 w-full max-w-5xl rounded-2xl border border-base-300">
          <img
            className="w-full rounded-2xl"
            src="https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149152831.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Shoes" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
