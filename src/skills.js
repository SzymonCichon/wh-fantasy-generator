import React from 'react';
import './App.css';
import data from './data.json';

var Component_for_skills = (props) => {
    return <tr>
        <td className='attribute_names'><label>{data.skills.skill_generation_polish_names.skill_names[props.number] }</label></td>
        <td className='skill_attribute'><label>{data.skills.skill_generation_polish_names.stat_names[props.number]}</label></td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 0} min='0' max = '100' disabled/> </td>
        <td className='skill_attribute'><input list='skill_percentage' name={data.skills.skill_generation_input_name[props.number] + 1} /> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 2} min='0' max = '100' disabled/> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 3} min='0' max = '100' /> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 4} min='0' max = '100' disabled/> </td>
    </tr>
}

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id = 'skills' class = 'Main_Div'>
            
             <form>
                <table className='stats_table'>
                    <tbody>
                    <tr>
                        <th colSpan='7'>Umiejętności podstawowe</th>
                    </tr>
                    <tr>
                        <td >Nazwa</td>
                        <td >Cecha</td>
                        <td >Baza</td>
                        <td >Poziom</td>
                        <td >Zdolności</td>
                        <td >Inne</td>
                        <td >Suma</td>
                    </tr>
                    <Component_for_skills  number={0}/>
                    <Component_for_skills  number={1}/>
                    <Component_for_skills  number={2}/>
                    <Component_for_skills  number={3}/>
                    <Component_for_skills  number={4}/>
                    <Component_for_skills  number={5}/>
                    <Component_for_skills  number={6}/>
                    <Component_for_skills  number={7}/>
                    <Component_for_skills  number={8}/>
                    <Component_for_skills  number={9}/>
                    <Component_for_skills  number={10}/>
                    <Component_for_skills  number={11}/>
                    <Component_for_skills  number={12}/>
                    <Component_for_skills  number={13}/>
                    <Component_for_skills  number={14}/>
                    <Component_for_skills  number={15}/>
                    <Component_for_skills  number={16}/>
                    <Component_for_skills  number={17}/>
                    <Component_for_skills  number={18}/>
                    <Component_for_skills  number={19}/>
                    <tr>
                        <th colSpan='7'>Umiejętności zaawansowane</th>
                    </tr>
                    <Component_for_skills  number={20}/>
                    <Component_for_skills  number={21}/>
                    <Component_for_skills  number={22}/>
                    <Component_for_skills  number={23}/>
                    <Component_for_skills  number={24}/>
                    <Component_for_skills  number={25}/>
                    <Component_for_skills  number={26}/>
                    <Component_for_skills  number={27}/>
                    <Component_for_skills  number={28}/>
                    <Component_for_skills  number={29}/>
                    <Component_for_skills  number={30}/>
                    <Component_for_skills  number={31}/>
                    <Component_for_skills  number={32}/>
                    <Component_for_skills  number={33}/>
                    <Component_for_skills  number={34}/>
                    <Component_for_skills  number={35}/>
                    <Component_for_skills  number={36}/>
                    <Component_for_skills  number={37}/>
                    <Component_for_skills  number={38}/>
                    <Component_for_skills  number={39}/>
                    <datalist id='skill_percentage'>
                        <option value='+0%'/>
                        <option value='+10%'/>
                        <option value='+20%'/>
                    </datalist>


                    </tbody>
                </table>
             </form>
        </div>
    }
}

export default Skills;