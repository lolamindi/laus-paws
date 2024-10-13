import { dogs as dogData } from "../../../data/dogs.json";
import Image from "next/image";

export default function Reviews({ dogs = dogData }) {
  return (
    <main className="relative flex justify-center items-center min-h-screen bg-[#edd4cd]">
      <section className="absolute top-4 left-14 p-6 text-gray-800">
        <h1 className="text-2xl font-bold pb-2">Reviews</h1>
        <p className="text-left w-[97%] text-lg">
          Welcome to the Lau's Paws reviews page! You can read the&nbsp;
          <a
            href="https://www.facebook.com/LausPawsIbstock/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-800"
          >
           100% positive recommendations&nbsp;
          </a>
          our human customers have kindly left for us on Facebook, but here are some tail-wagging testimonials from our favourite canine visitors:
        </p>
      </section>
      <section className="grid grid-cols-3 gap-x-16 gap-y-8 mt-40 mb-20">
        <ul className="contents">
          {dogs.map((dog) => (
            <li
              key={dog.id}
              className="flex flex-col items-center rounded-lg border-2 border-pink-700 p-4 bg-white"
            >
              <article>
                <Image
                  className="pb-2 h-[243px]"
                  src={dog.image}
                  width={325}
                  height={243}
                  alt={`small dog called ${dog.dog_name}`}
                />
                <span className="font-semibold text-lg text-gray-800">
                  {dog.dog_name}
                </span>
                <blockquote className="w-[325px] border-t-2 pt-1 border-pink-800 text-gray-900">
                  &ldquo;{dog.review}&rdquo;
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
