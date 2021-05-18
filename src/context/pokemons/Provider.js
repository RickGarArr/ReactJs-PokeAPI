import PokemonContext from './index';
import apiCall from '../../api';
import { useState } from 'react';

export default function PokemonProvider({ children }) {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, sethasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            sethasError(false);
            setErrorMessage("");
            const response = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
            setPokemons(response.results);
        } catch (error) {
            setErrorMessage("Algo salió mal, revisa tu conexion de internet");
            sethasError(true);
            setPokemons([]);
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if(!id) return Promise.reject("El nombre es requerido");
        try {
            setIsLoading(true);
            sethasError(false);
            setErrorMessage("");
            const response = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}/` });
            setPokemonDetail(response);
        } catch (error) {
            setErrorMessage("Error al traer informacion del pokemon");
            sethasError(true);
            setPokemonDetail({});
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PokemonContext.Provider value={{ getPokemons, getPokemonDetail, pokemons, pokemonDetail, isLoading, hasError, errorMessage}}>
            { children}
        </PokemonContext.Provider>
    )
}