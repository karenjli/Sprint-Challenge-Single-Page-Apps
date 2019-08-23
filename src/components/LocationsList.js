import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard'
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect (()=> {
        const getloc = () =>{
        axios
            .get ("https://rickandmortyapi.com/api/location/")
            .then (res => {
               console.log(res);
                setLocations (res.data.results);       
            })
            .catch (error => {
                console.log(error);
            })
        }
        getloc();
    },[]);
    
        return (
            <section className="location-list grid-view">
                <div>
                    {locations.map (location => (
                        <LocationCard key={location.id} location={location} />
                    ))}
                </div>
            </section>
        )
    
}
