
import { dogs as dogData } from "../../../data/dogs.json"; 
import Image from "next/image";

export default function Reviews({ dogs = dogData }) {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-20 py-20">
        <section>
          <h1>Dog Reviews</h1>
          <ul>
            {dogs.map((dog) => (
              <li key={dog.id}>
                <article>
                  <Image
                    src={dog.image}
                    width={350}
                    height={200}
                    alt={`small dog called ${dog.dog_name}`}
                  />
                  <p>{dog.review}</p> 
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}