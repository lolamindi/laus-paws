export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-200 h-16 flex items-center border-t-2 border-pink-500 p-4 text-gray-900">
      © {currentYear}, Lau's Paws      
    </footer>
  );
}