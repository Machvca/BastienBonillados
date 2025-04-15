import About from "./sections/About";
import Process from "./sections/Process";
import Hero from "./sections/Hero";
import { Reviews } from "./sections/Reviews";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col ">
      <div className="w-full h-full bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#3a0ca3]/80">
        <Hero />
        <Reviews />
        <About />
        <Process />
      </div>
    </main>
  );
}
