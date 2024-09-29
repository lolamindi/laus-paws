import SocialNavBar from "./SocialNavBar.jsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-200 h-16 flex items-center justify-between border-t-2 border-pink-600 pl-4 pr-8 text-gray-900">
      © {currentYear}, Lau's Paws  
      <SocialNavBar/>    
    </footer>
  );
}