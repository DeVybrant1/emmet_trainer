import { Link } from "react-router"
function Navbar() {
  return (
    <nav className="flex items-center p-4 bg-blue-500">
      <Link to="/" className="font-bold text-2xl">Emmet Trainer</Link>

      <ul className="ml-auto flex gap-6">
        {/* <li><a href="#">Lessons</a></li> */}
        <li><a href="#">Practice</a></li>
        <li><a href="#">Cheatsheet</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
