import PokemonListItem from '../PokemonListItem';

export default function PokemonList({ pokemons }) {
    return (
        <div>
            { pokemons?.map(({name, url}) => (
                <PokemonListItem key={url} name={name} url={url} />
            ))}
        </div>
    );
}