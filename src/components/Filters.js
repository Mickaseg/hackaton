import {useState} from "react";

const Filter = () => {
    
	const [choice, setChoice] = useState([])
    
		const display = (e) => {
            e.preventDefault();
            console.log(choice)
        }
        
	
		

    return(
        <div>
            <h1> Make your Choice </h1>

            <select name="gender" value={choice} onChange={(e) => setChoice(e.target.value)}>
                <option value='male' onClick={(e) => setChoice(e.target.value)}> Male</option>
            <option value='female'onClick={(e) => setChoice(e.target.value)}>Female</option>
            <option value='droid'onClick={(e) => setChoice(e.target.value)}>Droid</option>
            </select>
        <select name="homeworld" onChange={(e) => setChoice(e.target.value)}>
                <option value='tatooine'>Tatooine</option>
                <option value='naboo'>Naboo</option>
                <option value='alderaan'>Alderaan</option>
                <option value='stewjon'>Stewjon</option>
                <option value='eriadu'>Eriadu</option>
                <option value='kashyyyk'>Kashyyyk</option>
                <option value='corellia'>Corellia</option>
                <option value='rodia'>Rodia</option>
                <option value='bestine'>Bestine</option>
                <option value='naboo'>Naboo</option>
                <option value='kamino'>Kamino</option>
                <option value='trandosha'>Trandosha</option>
                <option value='socorro'>Socorro</option>
                <option value='bespin'>Bespin</option>
                <option value='mon cala'>Mon Cala</option>
                <option value='chandrila'>Chandrila</option>
                <option value='endor'>Endor</option>
                <option value='sullust'>Sullust</option>
                <option value='coruscant'>Coruscant</option>
                <option value='neimoidia'>Neimoidia</option>
                <option value='coruscant'>Coruscant</option>
                <option value='toydaria'>Toydaria</option>
                <option value='malastare'>Malastare</option>
                <option value='dathomir'>Dathomir</option>
                <option value='ryloth'>Ryloth</option>
                <option value='aleen'>Aleen</option>
                <option value='vulpter'>Vulpter</option>
                <option value='troiken'>Troiken</option>
                <option value='tund'>Tund</option>
                <option value='haruun'>Haruun Kai</option>
                <option value='cerea'>Cerea</option>
                <option value='glee anselm'>Glee Anselm</option>
                <option value='nar shaddaa'>Nar Shaddaa</option>
                <option value='iktotch'>Iktotch</option>
                <option value='quermia'>Quermia</option>
                <option value='dorin'>Dorin</option>
                <option value='champala'>Champala</option>
                <option value='geonosis'>Geonosis</option>
                <option value='mirial'>Mirial</option>
                <option value='serenno'>Serenno</option>
                <option value='concord dawn'>Concord Dawn</option>
                <option value='zolan'>Zolan</option>
                <option value='ojom'>Ojom</option>
                <option value='skako'>Skako</option>
                <option value='scipio'>Scipio</option>
                <option value='shili'>Shili</option>
                <option value='kalee'>Kalee</option>
                <option value='utapau'>Utapau</option>
                <option value='yavin 4'>Yavin 4</option>
                <option value='jakku'>Jakku</option>
                <option value='parnassos'>Parnassos</option>
            </select><select name="haircolor" onChange={(e) => setChoice(e.target.value)}>
                <option value='blond'>Blond</option>
                <option value='brown, later graying'>Brown later graying'</option>
                <option value='brown, later gray'>Brown later gray</option>
                <option value='brown'>Brown</option>
                <option value='black'>Black</option>
                <option value='light brown, later white'>Light brown, later white</option>
                <option value='auburn, later gray'>Auburn, later gray</option>
                <option value='white'>White</option>
                <option value='auburn'>Auburn</option>
            </select><select name="eyecolor" onChange={(e) => setChoice(e.target.value)}>
                <option value='blue'>Blue</option>
                <option value='yellow'>Yellow</option>
                <option value='red'>Red</option>
                <option value='brown'>Brown</option>
                <option value='hazel'>Hazel</option>
                <option value='gray-blue'>Gray-blue</option>
                <option value='purple'>Purple</option>
                <option value='orange'>Orange</option>
                <option value='green-gold'>Green Gold</option>
                <option value='blue, yellow (dark side)'>Blue Yellow</option>
            </select>
                
         </div>
    )
}

export default Filter;