import Image from "next/image";
import { dogs } from "../../../public/assets/dogs.json";

export default function DogReviewCard({ dog }) {
  return (
    <article>
      <Image
        src= "/assets/img/review-dog1.jpg"
        width={350}
        height={200}
        alt={`small dog`} 
      />
    </article>
  );
}