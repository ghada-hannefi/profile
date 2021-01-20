import React,{Component} from 'react';
import Profile from'./Profile/ProfileComponent';
import female from'./Profile/female.png';
import man from'./Profile/man.png';
import matureman from'./Profile/matureman.png';
import './App.css';

class App extends Component { render(){
  return (
    <div className="App" >
      <h1 style={{color:'LightSlateGrey',textAlign:'center'}}> Profile</h1>
      <Profile FullName="Maria Hulk" profession="doctor" bio="Biographie professionnelleMartine Herzog-Evans est professeur à l’Université de Reims depuis la rentrée 2006-2007. Elle a précédemment enseigné au sein des universités de Nantes, Paris XI et Paris X.Après une licence en droit public (Paris XI, 1983), un certificat en droit européen et communautaire (Paris I, 1984)"><img src={female} alt=""/></Profile>
      <Profile FullName="David Mayer" profession="architect" ><img src={man} alt=""/></Profile>
      <Profile FullName="Jack Hambleton" profession="engineer" bio="allocataire d’enseignement et de recherche de 1989 à 1993, puis ATER de 1993 à 1995 à l’Université de Paris XI (Sceaux)."><img src={matureman} alt=""/></Profile>

    </div>
  );}
}

export default App;
