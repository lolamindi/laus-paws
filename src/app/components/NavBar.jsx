import Link from "next/link";

export default function SocialNavBar() {
  return (
<nav className>
<ul className="flex gap-10 text-white font-semibold text-lg ml-[525px]">
  <li>
    <Link href="/about">ABOUT</Link>
  </li>
  <li>
    <Link href="/prices">PRICES</Link>
  </li>
  <li>
    <Link href="/faqs">FAQs</Link>
  </li>
  <li>
    <Link href="/reviews">REVIEWS</Link>
  </li>
  <li>
    <Link href="/contact">CONTACT</Link>
  </li>
</ul>
</nav>
  );
}