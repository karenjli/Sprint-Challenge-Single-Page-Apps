import React from "react";
import {Card, Image} from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
        <div className="CharCard">
          <Card>
            <Image src={props.image} />
              <Card.Header>{props.name}</Card.Header>
              <Card.Meta>{`${props.species} ${props.status}`}</Card.Meta>           
              <Card.Description>
                Location: {props.location} 
                {'\n'}
                Origin: {props.origin}
              </Card.Description>
          </Card>
        </div>
    );
}
