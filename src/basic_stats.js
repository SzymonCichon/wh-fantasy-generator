import React from 'react';
import './App.css';
import data from './data.json';

function create_datalists_function(state, datalist_name) {
    var datalist_return = "<datalist id='" + datalist_name + "'>"
    for (var i = 0; i < state.length; i++) {
        datalist_return += "<option value='" + state[i].god_name + "'>";
    }
    datalist_return += '</datalist>'
    return datalist_return;
};

class Create_Datalists extends React.Component {
    constructor(props) {
        super(props);
        this.state = { gods: data.character_creation[0].faith };
    }

    render() {
        var data = create_datalists_function(this.state.gods, "character_god_name")
        return <div
            dangerouslySetInnerHTML={{ __html: data }}
        />
    }
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
                <div id="basic_stats_datalists">
                    <Create_Datalists />
                </div>
            </form>
        </div>;
    }
}

export default Basic_Stats;