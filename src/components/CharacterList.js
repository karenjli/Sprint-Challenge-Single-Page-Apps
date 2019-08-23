import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState ([]);

  useEffect(() => {
      
      const getChar = () => {
      axios
        .get ("https://rickandmortyapi.com/api/character/")
          .then (response => {
            console.log(response.data.results);         
            setCharacters (response.data.results) 
          })
          .catch (error => {
            console.log(error);
          })
       }

       getChar();
  }, []);

  return (
    <section className="character-list grid-view">
       <div>
         {characters.map (char =>
            (<CharacterCard 
              image={char.image} 
              name={char.name} 
              species={char.species} 
              status={char.status} 
              location={char.location.name}
              origin={char.origin.name}/>
            ))}  
      </div>
    </section>
  );
}
