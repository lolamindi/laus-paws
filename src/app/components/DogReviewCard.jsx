import Image from "next/image";
import { dogs } from "../../../public/assets/dogs.json";

export default function DogReviewCard({ dogs }) {
  return (
    <article>
      <Image
        src={dogs.image}
        width={350}
        height={200}
        alt={`${dogs.dog_name}`} 
      />
    </article>
  );
}