export default function PokemonStats({ stats }) {
    const statsList = stats?.map(({base_stat, effort, stat: {name, url}}) => (
        <div key={url}>
            <p>{name}: {base_stat}</p>
        </div>
    ));
    return (
        <div className="stats">
            { statsList }
        </div>
    );
}