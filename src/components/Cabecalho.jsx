import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite+React coded by - RM551986</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/produtos">Produtos</Link> </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
