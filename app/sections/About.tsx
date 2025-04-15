import Image from "next/image";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import about4 from "../../assets/images/about4.jpg";

function About() {
  return (
    <div className="overflow-hidden">
      {/* Tarjetas */}
      <div className="w-full min-h-screen antialiased flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center px-4 sm:px-8 md:px-12 md:-mt-64">
        {[hero2, hero3, hero4].map((bg, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-2xl text-center px-4 sm:px-6 md:px-8 w-full md:w-[30%] h-[400px] bg-cover bg-center text-white shadow-lg"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h1 className="text-2xl font-bold mb-4 text-shadow-lg">
              {
                [
                  "THINK LIKE A MAGICIAN",
                  "CORPORATE MAGIC SHOWS",
                  "VIRTUAL MAGIC EXPERIENCES",
                ][idx]
              }
            </h1>
            <p className="mb-4 text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, unde...
            </p>
            <button className="bg-white text-black px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Imagen con texto */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <Image
          src={about4}
          alt="Bastien Bonilla"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute top-0 left-0 p-6 sm:p-12 text-left sm:text-right text-white bg-black/40 m-4 sm:ml-12 sm:mt-12 rounded-xl max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">
            &quot;Bastien Bonilla&quot;
          </h1>
          <p className="mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptas aut. Explicabo voluptatibus corporis exercitationem...
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
