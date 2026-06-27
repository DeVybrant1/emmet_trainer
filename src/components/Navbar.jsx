import { Link } from "react-router"
function Navbar() {
  return (
    <nav className="flex items-center p-4 bg-green-500">
      <Link to="/" className="font-bold text-2xl">Emmet Trainer</Link>

      <ul className="ml-auto flex gap-6">
        {/* <li><a href="#">Lessons</a></li> */}
        <li><Link to="Main">Practice</Link></li>
        <li><Link to="Cheatsheet">Cheatsheet</Link></li>
        <li><a href="https://emmet.io/" target="_blank" rel="noopener noreferrer">More Emmet </a></li>
      </ul>
    </nav>
  )
}

export default Navbar
