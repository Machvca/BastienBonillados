import Image from "next/image";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import about4 from "../../assets/images/about4.jpg";

function About() {
  return (
    <>
      <div className="w-full h-screen antialiased flex flex-row p-12 space-x-24 bg-amber-400">
        {/* Primera tarjeta con fondo */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl border border-amber-950 px-12 w-full h-full bg-cover bg-center text-slate-200"
          style={{ backgroundImage: `url(${hero2.src})` }}
        >
          <h1 className="text-3xl font-bold mb-4">
            THINK LIKE A MAGICIAN™ KEYNOTES
          </h1>
          <p className="mb-4 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, unde itaque quia id doloremque accusamus...
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        {/* Segunda tarjeta con fondo */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl border px-12 w-full h-full bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${hero3.src})` }}
        >
          <h1 className="text-3xl font-bold mb-4">CORPORATE MAGIC SHOWS</h1>
          <p className="mb-4 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, unde itaque quia id doloremque accusamus...
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        {/* Tercera tarjeta con fondo */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl border px-12 w-full h-full bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${hero4.src})` }}
        >
          <h1 className="text-3xl font-bold mb-4">VIRTUAL MAGIC EXPERIENCES</h1>
          <p className="mb-4 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, unde itaque quia id doloremque accusamus...
          </p>
          <button className="bg-white text-black px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-full h-screen">
        {/* Imagen de fondo */}
        <Image
          src={about4}
          alt="Bastien Bonilla"
          fill
          className="object-cover w-full h-full"
          priority
        />

        {/* Texto encima */}
        <div className="absolute top-0 left-0 p-12 text-right text-white bg-black/20 ml-12 mt-12">
          <h1 className="text-7xl font-bold">Don pendejo</h1>
          <p className="mt-4 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptas aut. Explicabo voluptatibus corporis exercitationem. Cumque
            error unde quae dignissimos, repudiandae neque reiciendis totam
            aliquam ab tenetur, numquam officiis doloribus?
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
