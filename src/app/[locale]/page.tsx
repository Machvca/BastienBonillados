import About from "../../components/sections/About";
import Hero from "../../components/sections/Hero";
import { Reviews } from "../../components/sections/Reviews";
import Process from "../../components/sections/Process";
import Navbar from "@/src/components/sections/Navbar";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col ">
      <Navbar />
      <div className="w-full h-full ">
        <Hero />
        <Reviews />
        <About />
        <Process />
      </div>
      <Footer />
    </main>
  );
}
