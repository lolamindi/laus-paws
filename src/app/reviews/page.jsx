import DogReviewCard from "../components/DogReviewCard";
import { dogs } from "../../../public/assets/dogs.json";

export default function Reviews() {
  return(
  <main className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-20 py-20">
      <section>
      <h1>Dog Reviews</h1>
      <ul>
        {dogs.map((dogs) => (
          <li key={dogs.id}>
            <DogReviewCard/>
          </li>
        ))}
      </ul>
      </section>
      </div>
    </main>
      );
}