import React from 'react';
import './App.css';
import data from './data.json';


var Create_options = (props) => {
    var options = []
    var length_var = props.option_type.length
    console.log(props.option_type);
    for(var i=0; i<length_var;i++)
    {
        options.push(<option value={props.option_type[i]}/>)
    }
    return options
}

class Basic_Stats extends React.Component {


    render() {
        return <div id='basic_stats' class = 'Main_Div'>
            <form>
                <table id='basic_stats_table' className='stats_table'>
                    <tr>
                        <th colspan="2"><label>Informacje podstawowe</label></th>
                    </tr>
                    <tr>
                        <td><label>Imie  </label></td>
                        <td><input type='text' name='character_name' maxLength='16' /> </td>
                    </tr>
                    <tr>
                        <td><label>Nazwisko  </label></td>
                        <td><input type='text' name='character_surname' maxLength='16' /> </td>
                    </tr>
                    <tr>
                        <td><label>Rasa  </label></td>
                        <td><input list='character_gender' name='character_gender' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <td><label>Płeć</label></td>
                        <td><input list='character_race' name='character_race' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <td><label>Miejsce urodzenia</label></td>
                        <td><input list='character_birthplace' name='character_birthplace' maxLength="32" /> </td>
                    </tr>
                    <tr>
                        <th colspan="2"><label>Wygląd</label></th>
                    </tr>
                    <tr>
                        <td><label>Budowa ciała</label></td>
                        <td><input list='character_body_type' name='character_body_type' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <td><label>Wiek</label></td>
                        <td><input type='number' name='character_age' /> </td>
                    </tr>
                    <tr>
                        <td><label>Wzrost</label></td>
                        <td><input type='number' name='character_height' /></td>
                    </tr>
                    <tr>
                        <td><label>Waga</label></td>
                        <td><input type='number' name='character_weight' /> </td>
                    </tr>
                    <tr>
                        <td><label>Kolor oczu</label></td>
                        <td><input list='character_eye_color' name='character_eye_color' maxLength="16" /></td>
                    </tr>
                    <tr>
                        <td><label>Kolor skóry</label></td>
                        <td><input list='character_skin_color' name='character_skin_color' maxLength="16" /></td>
                    </tr>
                    <tr>
                        <td><label>Kolor włosów</label></td>
                        <td><input list='character_hair_color' name='character_hair_color' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <th colspan="2"><label>Wiara</label></th>
                    </tr>
                    <tr>
                        <td><label>Bóstwo opiekuńcze</label> </td>
                        <td><input list='character_god_name' name='character_god_name' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <td><label>Znak gwiezdny</label> </td>
                        <td><input list='character_star_sign' name='character_star_sign' maxLength="16" /> </td>
                    </tr>
                    <tr>
                        <td><label>Przepowiednia</label> </td>
                        <td><input list='character_prophecy' name='character_prophecy' maxLength="16" /> </td>
                    </tr>
                </table>
                <datalist id='character_god_name'>
                    <Create_options option_type={data.character_creation.faith}/>
                </datalist>
            </form>
        </div>;
    }
}

export default Basic_Stats;