export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-6 py-4 text-white">
      <h1 className="text-lg font-bold">MyLogo</h1>

      <ul className="flex gap-6">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
