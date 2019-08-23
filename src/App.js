import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import LocationsList from "./components/LocationsList"
import EpisodesList from "./components/EpisodeList"
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path = "/character" component = {CharacterList} />
      <Route exact path = "/location" component = {LocationsList} />
      <Route exact path = "/episode" component = {EpisodesList} />
    </main>
  );
}
