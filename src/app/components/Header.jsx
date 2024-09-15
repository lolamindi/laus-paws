import logo from "../../../public/assets/img/logo.png"
import Image from "next/image";

export default function Header() {
  return <header> 
    <div class="bg-pink-500 h-20 flex items-center">
    <Image class=""
          src={logo}
          width={80}
          height={80}
          alt="Lau's Paws logo"
        />
    <span class="text-white text-3xl">LAU'S PAWS</span>
    </div>

  </header>;
}
