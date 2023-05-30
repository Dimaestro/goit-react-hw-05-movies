import noPhoto from '../../assets/istockphoto-1354776450-612x612.jpg';

const CharactersList = ({characters}) => {

  return (
    <div>
      <ul>
        {characters.map(({ id, character, name, profile_path }) => {
          const poster = profile_path ? `https://image.tmdb.org/t/p/w185/${profile_path}` : noPhoto
          return (
            <li key={id}>
              <img
                src={poster}
                alt={name}
                width={185}
                height={278} 
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CharactersList
