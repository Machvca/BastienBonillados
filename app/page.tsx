import About from "./sections/About";
import Hero from "./sections/Hero";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
      <div className="w-full h-full">
        <Hero />
        <About/>
      </div>
    </main>
  );
}
