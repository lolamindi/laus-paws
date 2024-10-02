import reviewOne from "../../../public/assets/img/review-dog1.jpg";
import Image from "next/image";

export default function Reviews() {
  return(
  <main className="flex justify-center items-center min-h-screen">
      <article className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-20 py-20">
      <Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />

      <Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />
       
      <Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />

<Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />

      <Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />
       
      <Image 
        src={reviewOne} 
        width={350} 
        height={200} 
        alt="small dog" />
      </article>
      </main>
      );
}