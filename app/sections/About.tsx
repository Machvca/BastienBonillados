import Image from "next/image";
import hero2 from "../../assets/images/hero2.jpg";


function About() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1 w-screen h-144 bg-indigo-900">
      {/* Contenedor del párrafo */}
      <div className="col-span-2 row-span-5 flex justify-center items-center">
        <p className="text-slate-100 text-center p-4 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>

      {/* Contenedor de la imagen */}
      <div className="col-span-2 row-span-5 col-start-3 bg-indigo-500 flex justify-center items-center">
        <Image
          src={hero2}
          alt="Bastien Bonilla"
          width={460}
          height={200}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default About;
