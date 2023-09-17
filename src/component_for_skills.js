import React from 'react';
import './App.css';
import data from './data.json';

var Options_For_Profesions = (props) => {
    var options = []
    var value = [-50, 0, 10, 20]
    if(props.is_100==1)
    {
        value[0]=-100
    }
    var until = parseInt(props.number)
    if (until > 4) {
        until = 4
    }
    for (var i = 0; i < (until + 1); i++) {
        if (i == 0) {
            options.push(<option value={i}>{value[i] + "%"}</option>)
        }
        else {
            options.push(<option value={i}>{value[i]}</option>)
        }

    }
    return options
}

class Component_for_skills extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            SkillsLevels: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            Sum: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            Modificator: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    createsum(column, row, basestat)
    {
        var current_sum = parseInt(this.state.Modificator[column][row]) + parseInt(basestat) 
        if(parseInt(this.state.SkillsLevels[column][row]) == 0)
        {
            if(column==0)
            {
                current_sum = current_sum/2
            }
            else
            {
                current_sum = 0
            }
            
        }
        else
        {
            current_sum += (parseInt(this.state.SkillsLevels[column][row]-1))*10
        }
        current_sum = Math.floor(current_sum)
        return current_sum
    }
    handleChange(e) {
        if(e.target.name.substr(15, 1)==2)
        {
            var array = this.state.SkillsLevels
            array[e.target.name.substr(11, 1)][e.target.name.substr(13, 1)] = e.target.value
            this.setState({SkillsLevels:array}) 
            this.createsum(e.target.name.substr(11, 1),e.target.name.substr(13, 1))
        }
        if(e.target.name.substr(15, 1)==4)
        {
            var array = this.state.Modificator
            array[e.target.name.substr(11, 1)][e.target.name.substr(13, 1)] = e.target.value
            this.setState({Modificator:array}) 
            this.createsum(e.target.name.substr(11, 1),e.target.name.substr(13, 1))
        }
        
        
    }


    return_ready_input() {
        var component_for_skills_return = []
        var profession_level = this.props.current_states.SkillsFromProfession;
        var skill_levels = this.state.SkillsLevels;
        var sum = this.state.Sum
        var mod = this.state.Modificator
        var stats_value = this.state.Stats
        
        for (var i = 0; i < 20; i++) {
            var a = i + this.props.number * 10
            var to_send = "0"
            if (profession_level[this.props.number][i] == "0") {
                if (this.props.number == 0) {
                    to_send = "-50%"
                }
                else {
                    to_send = "-100%"
                }

            }
            else if (profession_level[this.props.number][i] == "1") {
                to_send = "+0"
            }
            else if (profession_level[this.props.number][i] == "2" || profession_level[this.props.number][i] == "3") {
                to_send = "+" + (profession_level[this.props.number][i] - 1) * 10
            }
            else {
                to_send = "+20"
            }
            
            var base_attribute
            if (data.polish.skill_generation.stat_names[a] === "K") {
                base_attribute = this.props.current_states.ST[5]
            }
            if (data.polish.skill_generation.stat_names[a] === "Odp") {
                base_attribute = this.props.current_states.TO[5]
            }
            if (data.polish.skill_generation.stat_names[a] === "Zr") {
                base_attribute = this.props.current_states.AG[5]
            }
            if (data.polish.skill_generation.stat_names[a] === "Int") {
                base_attribute = this.props.current_states.IN[5]
            }
            if (data.polish.skill_generation.stat_names[a] === "SW") {
                base_attribute = this.props.current_states.WP[5]
            }
            if (data.polish.skill_generation.stat_names[a] === "Ogd") {
                base_attribute = this.props.current_states.FE[5]
            }
            base_attribute = parseInt(base_attribute)
            component_for_skills_return.push(<tr>
                <td className='attribute_names'><label>{data.polish.skill_generation.skill_names[a]}</label></td>
                <td className='skill_attribute'><label>{data.polish.skill_generation.stat_names[a]}</label></td>
                <td className='skill_attribute'><input type='number' name={"Skill_name_" + this.props.number + "_" + i + "_" + 0} min='0' max='100' disabled value={base_attribute}  /> </td>
                <td className='skill_attribute'><input type='text' name={"Skill_name_" + this.props.number + "_" + i + "_" + 1} min='0' max='100' disabled value={to_send} /> </td>
                <td className='skill_attribute'><select name={"Skill_name_" + this.props.number + "_" + i + "_" + 2} value = {skill_levels[this.props.number][i]}  onChange={this.handleChange}>
                    <Options_For_Profesions number={profession_level[this.props.number][i] } is_100 = {this.props.number}/>
                </select>
                </td>
                <td className='skill_attribute'><input type='number' name={"Skill_name_" + this.props.number + "_" + i + "_" + 3} min='0' max='100' disabled /> </td>
                <td className='skill_attribute'><input type='number' name={"Skill_name_" + this.props.number + "_" + i + "_" + 4} min='0' max='100' value={mod[this.props.number][i]} onChange={this.handleChange}/> </td>
                <td className='skill_attribute'><input type='number' name={"Skill_name_" + this.props.number + "_" + i + "_" + 5} min='0' max='100' value={this.createsum(this.props.number, i, base_attribute)} disabled onChange={this.handleChange}/> </td>
            </tr>)
        }
        return component_for_skills_return
    }
    render() {
        return this.return_ready_input()
    }
}

export default Component_for_skills