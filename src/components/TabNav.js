import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodeList";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
    const panes = [
        { menuItem: 'Tab 1', render: () => <Tab.Pane>{<CharacterList />}</Tab.Pane> },
        { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
      ]
      
      const TabExampleBasic = () => <Tab panes={panes} />
    //   function onClick (event) {
    //         event.target.onClick
    //   }

    return (
        
        <div>
            <div class="ui pointing secondary menu">
                <NavLink to = "/" className="item" activeClassName="active item">Home</NavLink>
                <NavLink to = "./character" className="item" activeClassName="active item">Character</NavLink>
                <NavLink to = "./location" className="item" activeClassName="active item">Location</NavLink>
                <NavLink to = "./episode" className="item" activeClassName="active item">Episode</NavLink>
                
            </div>
            
           
        </div>
       
    )
};

