import logo from "../../../public/assets/img/logo.png"
import logo_writing from "../../../public/assets/img/logo writing.png"
import Image from "next/image";

export default function Header() {
  return <header class="bg-pink-500 h-20 flex items-center">
    <Image class=""
          src={logo}
          width={80}
          height={80}
          alt="Lau's Paws logo"
        />
    <Image class="pt-2"
          src={logo_writing}
          width={200}
          height={300}
          alt="Lau's Paws logo"
        />
  </header>;
}
