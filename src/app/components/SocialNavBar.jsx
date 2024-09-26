import Link from "next/link";
import Image from "next/image";
import facebook from "";
import instagram from "";
import whatsapp from "";


export default function SocialNavBar() {
  return (
    <nav className>
      <ul className>
        <li>
          <Link href="https://www.facebook.com/LausPawsIbstock/" target="_blank">
            <Image
              className={facebookLogo}
              src={facebook}
              width={17}
              height={17}
              alt="facebook icon"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/laus_paws/" target="_blank">
            <Image
              className={instagramLogo}
              src={instagram}
              width={18}
              height={18}
              alt="instagram icon"
            />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/447726339108" target="_blank">
            <Image
              className={whatsAppLogo}
              src={whatsapp}
              width={18}
              height={18}
              alt="whatsapp icon"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

