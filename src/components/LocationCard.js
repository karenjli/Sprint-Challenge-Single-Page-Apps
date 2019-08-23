import React from "react";
import {Card} from 'semantic-ui-react'


export default function LocationCard(location) {
    const { name, type, dimension, residents} = location.location
    
  return (
    <div className ="LocationCard">
      <Card
        header={name}
        meta={`${type} ${dimension}`}
        description={`${residents.length} Resident(s)`}
      />
    </div>
  )
}
