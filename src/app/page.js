import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Popular from "@/components/Popular/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/Rectangle.png'),linear-gradient(123.4deg,_#bd1f17_40.8%,_#a61d13_76.4%,_#8e1b0f_120.69%)] bg-cover bg-center bg-no-repeat">
        <Header />
        <Hero />
      </div>
      <About />
      <Popular />

      <div className="min-h-screen"></div>
    </main>
  );
}
