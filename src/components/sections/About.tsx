import Image from "next/image";
import hero2 from "../../../public/assets/images/hero2.jpg";
import hero3 from "../../../public/assets/images/hero3.jpg";
import hero4 from "../../../public/assets/images/hero4.jpg";
import about4 from "../../../public/assets/images/about4.jpg";

function About() {
  return (
    <div className="overflow-hidden">
      {/* Tarjetas */}
      <div className="w-full min-h-screen antialiased flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center px-4 sm:px-8 md:px-12 md:-mt-64 mask-r-from-50%">
        {[hero2, hero3, hero4].map((bg, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-2xl text-center px-4 sm:px-6 md:px-8 w-full md:w-[30%] h-[400px] bg-cover bg-center text-white shadow-lg mb-12"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-shadow-lg">
              {["CLOSE-UP MAGIC", "THE SHOW", "THE ELITE PACKAGE"][idx]}
            </h1>

            <p className="mb-4 text-center text-sm">
              {
                [
                  "Strolling, table hopping, mingling - the magician blends in the crowd of your event and performs interactive tricks to smaller groups of people. Designed for venues or events which cannot support a show. Perfect for team buildings, trade-shows, birthdays, weddings, cocktail parties, and so much more. No technical requirements - just pure magic! ",
                  "Interactive show that mixes magical techniques such as sleight of hand, misdirection, mentalism, psychological deceptions and humor in a curated act over 10 years in the making. Can be adapted to any type of venue, ranging from: a small apartment room, to medium-sized stages, to larger theatres. Mainly designed for adult audiences (teenagers and older), but not suitable for kids. The show can be customized and tailored to the client. ",
                  "The Elite Package offers a fully personalized evening of entertainment, blending an engaging stage performance with interactive close-up magic, It’s designed to give your guests a complete magical experience from start to finish This option is the top choice for most clients, with Bastien mingling through the crowd—often during cocktail hour or while entrées are served—performing intimate, close-up magic that generates excitement and sets the tone for the main act By combining both elements into one event, this package offers excellent value and a discounted rate, It delivers a seamless night of captivating entertainment thats sure to leave your guests talking long after the event ends.",
                ][idx]
              }
            </p>
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
