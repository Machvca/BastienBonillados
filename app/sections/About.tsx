import Image from "next/image";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";


function About() {
  return (
    <div className="space-y-0">
      {/* Primera sección */}
      <div className="grid grid-cols-4 grid-rows-5 gap-0 w-screen h-88 bg-red-900">
        {/* Contenedor del párrafo */}
        <div className="col-span-2 row-span-5 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl text-slate-200">Meet Bastien Bonilla</h1>
            <p className="text-slate-100 text-left p-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>

        {/* Contenedor de la imagen con efecto hover */}
        <div className="col-span-2 row-span-5 col-start-3 bg-red-900">
          <Image
            src={hero2}
            alt="Bastien Bonilla"
            width={200}
            height={200}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            priority
          />
        </div>
      </div>

      {/* Segunda sección */}
      <div className="grid grid-cols-4 grid-rows-5 gap-0 w-screen h-88 bg-red-700">
        {/* Imagen 1 con efecto hover */}
        <div className="col-span-2 row-span-5 bg-red-700 relative group">
          <Image
            src={hero3}
            alt="Bastien Bonilla"
            width={200}
            height={200}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            priority
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
            vaffanculo 
          </button>
        </div>

        {/* Imagen 2 con efecto hover */}
        <div className="col-span-2 row-span-5 col-start-3 bg-red-900 relative group">
          <Image
            src={hero4}
            alt="Bastien Bonilla"
            width={200}
            height={200}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            priority
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
           vaffanculo tu
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
