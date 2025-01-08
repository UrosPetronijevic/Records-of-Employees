import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-4 px-10 flex gap-4 justify-between">
      <Link to="/table1" className="hover:underline">
        Mor
      </Link>
      <Link to="/table2" className="hover:underline">
        DodatnoOpterecenje
      </Link>
      <Link to="/table3" className="hover:underline">
        Pripravnost
      </Link>
      <Link to="/table4" className="hover:underline">
        Prekovremeni
      </Link>
    </nav>
  );
}
