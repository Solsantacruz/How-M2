import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {characters.map((personaje)=> {
         return(
            <Card name={personaje.name} species={personaje.species} gender={personaje.gender} image={personaje.image} />
         )
      })}
   </div>
   )
}
