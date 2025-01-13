import Link from "next/link";
import Image from "next/image";
import instagram from "../../../public/assets/img/instagram.png";
import whatsapp from "../../../public/assets/img/whatsapp.png";


export default function SocialNavBar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="https://www.instagram.com/laus_paws/" target="_blank">
            <Image
              src={instagram}
              width={26}
              height={26}
              alt="instagram icon"
            />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/447726339108" target="_blank">
            <Image
              src={whatsapp}
              width={25}
              height={25}
              alt="whatsapp icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

