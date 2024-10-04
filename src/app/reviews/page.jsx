import DogReviewCard from "../components/DogReviewCard";

export default function Reviews() {
  return(
  <main className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-20 py-20">
      <DogReviewCard />
      </div>
      </main>
      );
}