import React from 'react';
import './App.css';
import data from './data.json';
class Create_json extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            create_json_text : "",
            create_json_text_full : "[",
            send : "",
            valuesofstats : data.hooks.skill_hooks[0][0].stats,
            hook:"Akolita",
            fullhook:"[",
            currentnumber:0,
            prof_change : "Akolita",
            current_edited_skilltype:0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.to_console = this.to_console.bind(this)
        this.createhook = this.createhook.bind(this)
        this.another_prof = this.another_prof.bind(this)
    }
    handleChange(e)
    {
        /*var a = e.target.value
        this.setState({create_json_text : a})*/

        console.log("change");
        for (var i=0; i<8; i++)
        {
            var a = "hook" + i
            if(a == e.target.id)
            {
                var array = []
                for(var v=0; v<12; v++)
                {
                    array[v] = this.state.valuesofstats[v]
                }
                array[i] = e.target.value
                this.setState({valuesofstats : array})
            }
        }
    }
    handleClick()
    {
        var a = this.state.create_json_text_full + '"' + this.state.create_json_text + '",'
        this.setState({create_json_text_full : a})
        this.setState({create_json_text : ""})
    }
    to_console()
    {
        console.log(this.state.create_json_text_full)
        var a = "["
        for(var i =0; i<57; i++)
        {
            a+= '{"name" : "' + data.polish.profession.names[0][i].name + '", "hook" : "hook'+0+'_'+i+'"},'
        }
        a+="],["
        for(var i =0; i<52; i++)
        {
            a+= '{"name" : "' + data.polish.profession.names[1][i].name + '", "hook" : "hook'+1+'_'+i+'"},'
        }
        a+="]"
        this.setState({send : a})
    }
    createhook()
    {
    }
    create_list()
    {
        var a = []
        for(var i =0; i<57; i++)
        {
            a.push(<option value={data.polish.profession.names[0][i].name}>{data.polish.profession.names[0][i].name}</option>)
        }
        a.push(<option> </option>)
        a.push(<option> </option>)
        for(var i =0; i<52; i++)
        {
            a.push(<option value={data.polish.profession.names[0][i].name}>{data.polish.profession.names[0][i].name}</option>)
        }
        return a
    }
    another_prof(e)
    {
        var a = e.target.value;
        
        
        for (var number = 0; number < 2; number++) {
            for (var i = 0; i < 2; i++) {
                for (var b = 0; b < data.polish.profession.names[i].length; b++) {
                    if (data.polish.profession.names[i][b].name == this.state.prof_change &&number==0) {
                        for (var c = 0; c < 2; c++) {
                            for (var d = 0; d < data.hooks.skill_hooks[c].length; d++) {
                                if (data.hooks.skill_hooks[c][d].hook == data.polish.profession.names[i][b].hook) {
                                    data.hooks.skill_hooks[c][d].stats = this.state.valuesofstats
                                }
                            }
                        }
                    }
                    if (data.polish.profession.names[i][b].name == a &&number==1) {
                        for (var c = 0; c < 2; c++) {
                            for (var d = 0; d < data.hooks.skill_hooks[c].length; d++) {
                                if (data.hooks.skill_hooks[c][d].hook == data.polish.profession.names[i][b].hook) {
                                    this.setState({ valuesofstats: data.hooks.skill_hooks[c][d].stats })
                                }
                            }
                        }
                    }
                }
            }
        }
        this.setState({prof_change:a});
    }
    edit_data()
    {
        console.log(JSON.stringify(data.hooks))
    }
    render()
    {
        return  <div id = "create_json_div">
         Stwórz Json
            <input type='text' id = "create_json_text" value={this.state.create_json_text} />
            <input type='button' id = "create_json_button" value = "dodaj element" onClick={this.handleClick}/>
            <input type='button' id = "send_json" value = "do konsoli" onClick={this.to_console}/>
            <input type='textarea' value = {this.state.send}/>
            <table>
                <tr>
                    <td class='attribute'><label>WW</label></td>
                            <td class='attribute'><label>US</label></td>
                            <td class='attribute'><label>K</label></td>
                            <td class='attribute'><label>Odp</label></td>
                            <td class='attribute'><label>Zr</label></td>
                            <td class='attribute'><label>Int</label></td>
                            <td class='attribute'><label>SW</label></td>
                            <td class='attribute'><label>Ogd</label></td>
                            <td class='attribute'><label>A</label></td>
                            <td class='attribute'><label>Żyw</label></td>
                            <td class='attribute'><label>Sz</label></td>
                            <td class='attribute'><label>Mag</label></td>

                </tr>
                <tr>
                    <td><input type='number' value={this.state.valuesofstats[0]} id="hook0" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[1]} id="hook1" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[2]} id="hook2" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[3]} id="hook3" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[4]} id="hook4" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[5]} id="hook5" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[6]} id="hook6" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[7]} id="hook7" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[8]} id="hook8" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[9]} id="hook9" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[10]} id="hook10" onChange={this.handleChange} /></td>
                    <td><input type='number' value={this.state.valuesofstats[11]} id="hook11" onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td colSpan="6">  
                    <select  value = {this.state.prof_change} onChange={this.another_prof}>
                        {this.create_list()}
                    </select>
                    </td>
                    <td colSpan="4">  
                        <input type='button' onClick={this.edit_data} value="change attributes"/>
                    </td>
                </tr>
            </table>
            
        </div>
    }
    
}

export default Create_json