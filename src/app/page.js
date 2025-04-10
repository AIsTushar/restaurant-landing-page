import About from "@/components/About/About";
import BookNow from "@/components/BookNow/BookNow";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Popular from "@/components/Popular/Popular";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/Rectangle.png'),linear-gradient(123.4deg,_#bd1f17_40.8%,_#a61d13_76.4%,_#8e1b0f_120.69%)] bg-cover bg-center bg-no-repeat">
        <Header />
        <Hero />
      </div>
      <About />
      <Popular />
      <BookNow />
      <Testimonials />
      <Footer />
    </main>
  );
}
