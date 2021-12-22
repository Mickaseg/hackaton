import { useState, useEffect } from "react"
import Card from "../components/Card"
import logo from "../Assets/new_logo.png";
import Random from "../components/Random"

import "./Shop.css";
const Characters = () => {
  const [characters, setCharacters] = useState();
  const [poulet, setPoulet] =useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [choice, setChoice] = useState("default");
  const [choiceHomeworld, setChoiceHomeworld] = useState();
  const [choiceSpecies, setChoiceSpecies] = useState();
  const [choiceEyeColor, setChoiceEyeColor] = useState();
  const [choiceEyeColors, setChoiceEyeColors] = useState();
  useEffect(() => {
    const getData = () => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          setCharacters(res);
          setPoulet(res)
          setIsLoading(true);
        });
    };
    getData();
  }, []);

  // console.log('gender',choice);
  // console.log('home',choiceHomeworld);
  // console.log('spe',choiceSpecies);
  // console.log('eye',choiceEyeColor);
  useEffect(() => {
        
    const getDataFilter = () => {
      console.log(choiceEyeColors)
      const resultFilter = isLoading ? characters.filter((element) => element.gender === choice)
        .filter((element) => element.homeworld === choiceHomeworld)
        .filter((element) => element.eyeColor === choiceEyeColor) : <div>Loading</div>
      setPoulet(resultFilter)
    }
    getDataFilter()
  }, [choice, choiceEyeColor, choiceHomeworld])
  
  

  
  return (
    <div class='body-shop'>
      {/* {console.log('-----------',poulet)} */}
      <div className="filtersSelection">
    <div className= "shopshop">
      <img src={logo} alt="logo" className="logo logoshop" />
      <h1> Make your Choice </h1>
	  <div class='filters'>
		  
      <select name="gender" onChange={(e) => setChoice(e.target.value, "gender" )}>
        <option value="default">	&#9893;Gender</option>
        <option value="male"> &#9794;Male</option>
        <option value="female">&#9792;Female</option>
      </select>
      <select
        name="homeworld"
        onChange={(e) => setChoiceHomeworld(e.target.value)}
      >
        <option>Homeworld</option>
        <option value="tatooine">Tatooine</option>
        <option value="naboo">Naboo</option>
        <option value="alderaan">Alderaan</option>
        <option value="stewjon">Stewjon</option>
        <option value="eriadu">Eriadu</option>
        <option value="kashyyyk">Kashyyyk</option>
        <option value="corellia">Corellia</option>
        <option value="rodia">Rodia</option>
        <option value="bestine">Bestine</option>
        <option value="naboo">Naboo</option>
        <option value="kamino">Kamino</option>
        <option value="trandosha">Trandosha</option>
        <option value="socorro">Socorro</option>
        <option value="bespin">Bespin</option>
        <option value="mon cala">Mon Cala</option>
        <option value="chandrila">Chandrila</option>
        <option value="endor">Endor</option>
        <option value="sullust">Sullust</option>
        <option value="coruscant">Coruscant</option>
        <option value="neimoidia">Neimoidia</option>
        <option value="coruscant">Coruscant</option>
        <option value="toydaria">Toydaria</option>
        <option value="malastare">Malastare</option>
        <option value="dathomir">Dathomir</option>
        <option value="ryloth">Ryloth</option>
        <option value="aleen">Aleen</option>
        <option value="vulpter">Vulpter</option>
        <option value="troiken">Troiken</option>
        <option value="tund">Tund</option>
        <option value="haruun">Haruun Kai</option>
        <option value="cerea">Cerea</option>
        <option value="glee anselm">Glee Anselm</option>
        <option value="nar shaddaa">Nar Shaddaa</option>
        <option value="iktotch">Iktotch</option>
        <option value="quermia">Quermia</option>
        <option value="dorin">Dorin</option>
        <option value="champala">Champala</option>
        <option value="geonosis">Geonosis</option>
        <option value="mirial">Mirial</option>
        <option value="serenno">Serenno</option>
        <option value="concord dawn">Concord Dawn</option>
        <option value="zolan">Zolan</option>
        <option value="ojom">Ojom</option>
        <option value="skako">Skako</option>
        <option value="scipio">Scipio</option>
        <option value="shili">Shili</option>
        <option value="kalee">Kalee</option>
        <option value="utapau">Utapau</option>
        <option value="yavin 4">Yavin 4</option>
        <option value="jakku">Jakku</option>
        <option value="parnassos">Parnassos</option>
      </select>

      <select name="species" onChange={(e) => setChoiceSpecies(e.target.value)}>
        <option >Species</option>
        <option value="human">Human</option>
        <option value="droid">Droid</option>
        <option value="wookiee">Wookiee</option>
        <option value="rodian">Rodian</option>
        <option value="hutt">Hutt</option>
        <option value="yoda's species">Yoda's species</option>
        <option value="trandoshan">Trandoshan</option>
        <option value="mon calamari">Nom calamari</option>
        <option value="sullustan">Sullustan</option>
        <option value="neimoidian">Neimoidian</option>
        <option value="gungan">Gungan</option>
        <option value="toydarian">Toydarian</option>
        <option value="dug">Dug</option>
        <option value="dathomirian zabrak">Dathomirian Zabrak </option>
        <option value="twi'lek">Twi'lek</option>
        <option value="aleena">Aleena</option>
        <option value="yulpetereen">Yulpetereen</option>
        <option value="xexto">Xexto</option>
        <option value="toong">Toong</option>
        <option value="nautolan">Nautolan</option>
        <option value="iridonian zabrak">Iridonian</option>
        <option value="tholothian">Tholothian</option>
        <option value="iktotchi">Iktotchi</option>
        <option value="kel dor">Kel Dor</option>
        <option value="chagrian">Chagrian</option>
        <option value="mirialan">Mirialan</option>
        <option value="clawdite">Clawdite</option>
        <option value="besalisk">Besalisk</option>
        <option value="kaminoan">Kaminoan</option>
        <option value="skakoan">Skakoan</option>
        <option value="muun">Muun</option>
        <option value="togruta">Togruta</option>
        <option value="kaleesh">Kaleesh</option>
        <option value="umbaran">Umbaran</option>
        <option value="pau'an">Pau'an</option>
      </select>
      <select
        name="eyeColor"
        onChange={(e) => setChoiceEyeColor(e.target.value)}
      >
        <option>Eye Color</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="brown">Brown</option>
        <option value="hazel">Hazel</option>
        <option value="gray-blue">Gray-blue</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
        <option value="green-gold">Green Gold</option>
        <option value="blue, yellow (dark side)">Blue Yellow</option>
      </select>
	  </div>
      <div>
      </div>
        <div className="GaleryCharacters">
          {isLoading ? (
              poulet.map((character) => (
                <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                />
              ))
          ) : (
            <div>...Loading</div>
          )}
        </div>
      </div>
      <Random />
      
    </div>
    </div>
    
  );
};

export default Characters;
