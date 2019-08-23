import React from "react";
import {Card, Image} from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return (
        <div className="EpisodeCard">
          <Card
            header={props.name}
            meta={`Episode: ${props.epi}`}
            description={`Aired on: ${props.airDate}`}
            />
        </div>
    );
}
