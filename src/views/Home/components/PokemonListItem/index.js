import { Link } from 'react-router-dom';

export default function PokemonListItme({ name, url }) {
    const getId = () => url.split("/")[6];
    return (
        <div>
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}/${name}`}>Ver Detalle</Link>
            </button>
        </div>
    )
}