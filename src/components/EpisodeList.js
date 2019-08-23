import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard'
import axios from "axios";

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect (()=> {
        const getEpisodes = () =>{
        axios
            .get ("https://rickandmortyapi.com/api/episode/")
            .then (res => {
               console.log(res);
                setEpisodes (res.data.results);       
            })
            .catch (error => {
                console.log(error);
            })
        }
        getEpisodes();
    },[]);
    
        return (
            <section className="episode-list grid-view">
                <div>
                    {episodes.map (episode => (
                        <EpisodeCard key={episode.id} 
                        name={episode.name}
                        epi={episode.episode}
                        airDate={episode.air_date} />
                    ))}
                </div>
            </section>
        )
    
}
