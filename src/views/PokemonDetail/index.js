import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../../context/pokemons';
import PokemonStats from './PokemonStats';
import Loading from '../../components/Loading';

export default function PokemonDetail() {
    const { id } = useParams();
    const { pokemonDetail, getPokemonDetail, isLoading, errorMessage, hasError } = useContext(PokemonContext);

    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);

    if (isLoading) return <Loading />;

    return (
        <>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <div>
                    <p>{`Name: ${pokemonDetail?.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight} libras`}</p>
                    <p>{`Peso: ${pokemonDetail?.height} pies`}</p>
                    <PokemonStats stats={pokemonDetail?.stats ?? []} />
                </div>
            )}
        </>
    );
}