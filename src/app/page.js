export default function Home() {
  return (
    <>
      <main className="bg-puppies h-[600px] relative">
        <article className="absolute inset-0 flex justify-center mt-10">
          <div className="w-[53%] h-[38%] bg-white/30 backdrop-blur-sm p-8 rounded-md flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center text-pink-700 font-semibold">
              Home boarding and daycare for small to medium dogs
            </h1>
            <button className="bg-pink-600 w-40 h-10 rounded-md mt-6 flex items-center justify-center text-white text-center text-xl">Get in touch</button>
          </div>
        </article>
      </main>
    </>
  );
}

