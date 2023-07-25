import React from 'react';
import './App.css';
import data from './data.json';

var Create_Datalists_Class = (props) => {
    var options = []
    for(var i = 0; i<data.professions.polish.profession_names.length;i++)
    {
        options.push(<option value={data.professions.polish.profession_names[i] }/>)
    }
    
        return options
}
class Add_more_profesions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
        this.number_of_elements =1
    }
    handleClick()
    {
        var add_more_profesions = document.getElementById("add_more_profesions")
       
        console.log("Bla bla bla");
        var row = document.createElement("tr");

        var number_of_rows = parseInt(add_more_profesions.dataset.rows)

        var c1 = document.createElement("td");
        c1.innerHTML = "Profesja " + (number_of_rows+1)

        

        var c2 = document.createElement("td");
        c2.innerHTML = "<input list='professions' name='prof"+number_of_rows+"' />"

        row.appendChild(c1)
        row.appendChild(c2)
        add_more_profesions.dataset.rows = number_of_rows+1

        document.getElementById("professions_table").appendChild(row)
    }
    render()
    {
        return <tr>
            <th >Profesje</th>
            <td><input type='button' id="add_more_profesions" value = "+" onClick={this.handleClick} data-rows="1"/></td>
        </tr>
    } 
}


class Profession extends React.Component
{
    constructor (props)
    {
        super(props)
    }
    render()
    {
        return<div id = 'Professions' className='Main_Div'>
            <form>
                <table id='professions_table' className='stats_table'>
                    <Add_more_profesions/>
                    <tr>
                        <td>Profesja 1</td>
                        <td><input list='professions' name='prof0' /></td>
                    </tr>
                </table>
                <datalist id='professions'>
                    <Create_Datalists_Class/>
                </datalist>
            </form>
        </div>
    }
}



export default Profession