import Image from "next/image";

export default function DogReviewCard({ dog }) {
  return (
    <li className="flex flex-col items-center rounded-lg border-2 border-pink-700 p-4 bg-white">
      <article>
        <Image
          className="pb-2 h-[243px]"
          src={dog.image}
          width={325}
          height={243}
          alt={`small dog called ${dog.dog_name}`}
        />
        <span className="font-semibold text-lg text-gray-800">{dog.dog_name}</span>
        <blockquote className="w-[325px] border-t-2 pt-1 border-pink-800 text-gray-900">
          &ldquo;{dog.review}&rdquo;
        </blockquote>
      </article>
    </li>
  );
}
