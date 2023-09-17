import React from 'react';
import './App.css';
import data from './data.json';
import Component_for_skills from './component_for_skills.js'
//Creating object creating datalists for professions
var Create_Options_Class = (props) => {
    var options = []
    var ill = 0
    if(props.number ==0)
    {
        ill = 57
    }
    if(props.number == 1)
    {
        ill = 52
    }
    for (var i = 0; i < ill; i++) {
        options.push(<option value={data.polish.profession.names[props.number][i].name}>{data.polish.profession.names[props.number][i].name}</option>)
    }
    return options
}
//Generating extra professions slots
class Add_more_profesions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number_of_professions : 1,
            values_of_professions : [""]
        }
        this.handleClick = this.handleClick.bind(this);
        this.create_more_professions = this.create_more_professions.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick() {
        var a = this.state.number_of_professions + 1 
        this.setState({number_of_professions : a})
        var b = this.state.values_of_professions
        b[this.state.values_of_professions.length] = ""
        this.setState({values_of_professions : b})
    }
    handleChange(e)
    {
       var array = this.state.values_of_professions
       array[e.target.id.substr(-1,1)] = e.target.value
       this.setState({values_of_professions : array})
        console.log(this.state.values_of_professions);
    }
    create_more_professions(number) {
        var return_profesions = []
        for (var i = 0; i < number; i++) {
            return_profesions.push(
                <tr>
                    <td>Profesja {i + 1}</td>
                    <td><select value={this.state.values_of_professions[i]} onChange={this.handleChange} id = {"prof"+i} >
                        <optgroup label="Profesje podstawowe"><Create_Options_Class number = "0"/></optgroup>
                        <optgroup label="Profesje zaawansowane"><Create_Options_Class number = "1"/></optgroup>
                    </select>
                    </td>
                </tr>
            )
        }
        
    return return_profesions
    }
    render() {
        return <table id='professions_table' className='stats_table'>
            <tr>
            <th >Profesje</th>
            <td><input type='button' id="add_more_profesions" value="+" onClick={this.handleClick} data-rows="1" /></td>
            </tr>
            {this.create_more_professions(this.state.number_of_professions)}
            
            </table>
        
    }
}

class Character_Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            WS: [0, 0, 0, 0, 0, 0],
            BS: [0, 0, 0, 0, 0, 0],
            ST: [0, 0, 0, 0, 0, 0],
            TO: [0, 0, 0, 0, 0, 0],
            AG: [0, 0, 0, 0, 0, 0],
            IN: [0, 0, 0, 0, 0, 0],
            WP: [0, 0, 0, 0, 0, 0],
            FE: [0, 0, 0, 0, 0, 0],
            AT: [0, 0, 0, 0, 0, 0],
            WO: [0, 0, 0, 0, 0, 0],
            RE: [0, 0, 0, 0, 0, 0],
            SB: [0, 0, 0, 0, 0, 0],
            MO: [0, 0, 0, 0, 0, 0],
            MA: [0, 0, 0, 0, 0, 0],
            IP: [0, 0, 0, 0, 0, 0],
            FP: [0, 0, 0, 0, 0, 0],
            SkillsFromProfession: [[0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
            Basestatsforskills:[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        var starting_target = e.target.name.substr(0, 2)
        var target_number = e.target.name.substr(2, 3)
        if (starting_target == "WS") {
            var a = this.state.WS
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ WS: a }, () => {
                });
            }
        }
        if (starting_target == "BS") {
            var a = this.state.BS
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ BS: a }, () => {
                });
            }
        }
        if (starting_target == "ST") {
            var a = this.state.ST
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ ST: a }, () => {
                    console.log((15 - (15 % 10)) / 10)
                    var b = this.state.SB
                    b[0] = (a[5] - (a[5] % 10)) / 10
                    b[5] = b[0] + b[4]
                    this.setState({ SB: b })
                });
            }
        }
        if (starting_target == "TO") {
            var a = this.state.TO
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ TO: a }, () => {
                    console.log((15 - (15 % 10)) / 10)
                    var b = this.state.RE
                    b[0] = (a[5] - (a[5] % 10)) / 10
                    b[5] = b[0] + b[4]
                    this.setState({ RE: b })

                });
            }
        }
        if (starting_target == "AG") {
            var a = this.state.AG
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ AG: a }, () => {
                });
            }
        }
        if (starting_target == "IN") {
            var a = this.state.IN
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ IN: a }, () => {
                });
            }
        }
        if (starting_target == "WP") {
            var a = this.state.WP
            a[target_number] = e.target.value
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ WP: a }, () => {
                });
            }
        }
        if (starting_target == "FE") {
            var a = this.state.FE
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ FE: a }, () => {
                });
            }
        }

        if (starting_target == "AT") {
            var a = this.state.AT
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ AT: a }, () => {
                });
            }
        }
        if (starting_target == "WO") {
            var a = this.state.WO
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ WO: a }, () => {
                });
            }
        }
        if (starting_target == "SB") {
            var a = this.state.SB
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ SB: a }, () => {
                });
            }
        }
        if (starting_target == "RE") {
            var a = this.state.RE
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ RE: a }, () => {
                });
            }
        }
        if (starting_target == "MO") {
            var a = this.state.MO
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ MO: a }, () => {
                });
            }
        }
        if (starting_target == "MA") {
            var a = this.state.MA
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ MA: a }, () => {
                });
            }
        }
        if (starting_target == "IP") {
            var a = this.state.IP
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ IP: a }, () => {
                });
            }
        }
        if (starting_target == "FP") {
            var a = this.state.FP
            if ((target_number == 3 && a[2] >= e.target.value) || target_number != 3) {
                a[target_number] = e.target.value
                a[5] = parseInt(a[0]) + parseInt(a[1]) + parseInt(a[3]) + parseInt(a[4])
                this.setState({ FP: a }, () => {
                });
            }
        }
    }
    
    render() {
        return <div>
            <div id='character_attributes' class='Main_Div'>
                <form>
                    <table className='stats_table'>
                        <tr>
                            <th colspan="9"><label>Cechy główne</label></th>
                        </tr>
                        <tr>
                            <td id='attribute_names'><label>Nazwa cechy</label></td>
                            <td class='attribute'><label>WW</label></td>
                            <td class='attribute'><label>US</label></td>
                            <td class='attribute'><label>K</label></td>
                            <td class='attribute'><label>Odp</label></td>
                            <td class='attribute'><label>Zr</label></td>
                            <td class='attribute'><label>Int</label></td>
                            <td class='attribute'><label>SW</label></td>
                            <td class='attribute'><label>Ogd</label></td>
                        </tr>
                        <tr>
                            <td><label>Wartość początkowa</label></td>
                            <td><input type='number' name='WS0' min="0" max="100" onChange={this.handleChange} value={this.state.WS[0]} /> </td>
                            <td><input type='number' name='BS0' min="0" max="100" onChange={this.handleChange} value={this.state.BS[0]} /> </td>
                            <td><input type='number' name='ST0' min="0" max="100" onChange={this.handleChange} value={this.state.ST[0]} /> </td>
                            <td><input type='number' name='TO0' min="0" max="100" onChange={this.handleChange} value={this.state.TO[0]} /> </td>
                            <td><input type='number' name='AG0' min="0" max="100" onChange={this.handleChange} value={this.state.AG[0]} /> </td>
                            <td><input type='number' name='IN0' min="0" max="100" onChange={this.handleChange} value={this.state.IN[0]} /> </td>
                            <td><input type='number' name='WP0' min="0" max="100" onChange={this.handleChange} value={this.state.WP[0]} /> </td>
                            <td><input type='number' name='FE0' min="0" max="100" onChange={this.handleChange} value={this.state.FE[0]} /> </td>
                        </tr>
                        <tr>
                            <td><label>Zdolności</label></td>
                            <td><input type='number' name='WS1' min="0" disabled max="100" value={this.state.WS[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='BS1' min="0" disabled max="100" value={this.state.BS[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='ST1' min="0" disabled max="100" value={this.state.ST[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='TO1' min="0" disabled max="100" value={this.state.TO[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='AG1' min="0" disabled max="100" value={this.state.AG[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='IN1' min="0" disabled max="100" value={this.state.IN[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WP1' min="0" disabled max="100" value={this.state.WP[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='FE1' min="0" disabled max="100" value={this.state.FE[1]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><label>Maksymalny rozwój</label></td>
                            <td><input type='number' name='WS2' min="0" max="100" disabled value={this.state.WS[2]} /> </td>
                            <td><input type='number' name='BS2' min="0" max="100" disabled value={this.state.BS[2]} /> </td>
                            <td><input type='number' name='ST2' min="0" max="100" disabled value={this.state.ST[2]} /> </td>
                            <td><input type='number' name='TO2' min="0" max="100" disabled value={this.state.TO[2]} /> </td>
                            <td><input type='number' name='AG2' min="0" max="100" disabled value={this.state.AG[2]} /> </td>
                            <td><input type='number' name='IN2' min="0" max="100" disabled value={this.state.IN[2]} /> </td>
                            <td><input type='number' name='WP2' min="0" max="100" disabled value={this.state.WP[2]} /> </td>
                            <td><input type='number' name='AG2' min="0" max="100" disabled value={this.state.FE[2]} /> </td>
                        </tr>
                        <tr>
                            <td><label>Aktualny rozwój</label></td>
                            <td><input type='number' name='WS3' min="0" max="100" value={this.state.WS[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='BS3' min="0" max="100" value={this.state.BS[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='ST3' min="0" max="100" value={this.state.ST[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='TO3' min="0" max="100" value={this.state.TO[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='AG3' min="0" max="100" value={this.state.AG[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='IN3' min="0" max="100" value={this.state.IN[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WP3' min="0" max="100" value={this.state.WP[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='FE3' min="0" max="100" value={this.state.FE[3]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><label>Modyfikatory</label></td>
                            <td><input type='number' name='WS4' min="-100" max="100" value={this.state.WS[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='BS4' min="-100" max="100" value={this.state.BS[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='ST4' min="-100" max="100" value={this.state.ST[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='TO4' min="-100" max="100" value={this.state.TO[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='AG4' min="-100" max="100" value={this.state.AG[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='IN4' min="-100" max="100" value={this.state.IN[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WP4' min="-100" max="100" value={this.state.WP[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='FE4' min="-100" max="100" value={this.state.FE[4]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><label>Aktualna wartość</label></td>
                            <td><input disabled type='number' name='WS5' min="0" max="100" value={this.state.WS[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='BS5' min="0" max="100" value={this.state.BS[5]} onChange={this.handleChange} /> </td>
                            <td><input disabledtype='number' name='ST5' min="0" max="100" value={this.state.ST[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='TO5' min="0" max="100" value={this.state.TO[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='AG5' min="0" max="100" value={this.state.AG[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='IN5' min="0" max="100" value={this.state.IN[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='WP5' min="0" max="100" value={this.state.WP[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='FE5' min="0" max="100" value={this.state.FE[5]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <th colspan="9"><label>Cechy drugorzędne</label></th>
                        </tr>
                        <tr>
                            <td id='attribute_names'><label>Nazwa cechy</label></td>
                            <td class='attribute'><label>A</label></td>
                            <td class='attribute'><label>Żyw</label></td>
                            <td class='attribute'><label>S</label></td>
                            <td class='attribute'><label>Wt</label></td>
                            <td class='attribute'><label>Sz</label></td>
                            <td class='attribute'><label>Mag</label></td>
                            <td class='attribute'><label>PO</label></td>
                            <td class='attribute'><label>PP</label></td>
                        </tr>
                        <tr>
                            <td><label>Wartość początkowa</label></td>
                            <td><input type='number' name='AT0' min="0" max="100" value={this.state.AT[0]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WO0' min="0" max="100" value={this.state.WO[0]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='SB0' min="0" max="100" value={this.state.SB[0]} onChange={this.handleChange} disabled /> </td>
                            <td><input type='number' name='RE0' min="0" max="100" value={this.state.RE[0]} onChange={this.handleChange} disabled /> </td>
                            <td><input type='number' name='MO0' min="0" max="100" value={this.state.MO[0]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='MA0' min="0" max="100" value={this.state.MA[0]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='IP0' min="0" max="100" value={this.state.IP[0]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='FP0' min="0" max="100" value={this.state.FP[0]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><label>Zdolności</label></td>
                            <td><input disabled type='number' name='AT1' min="0" max="100" value={this.state.AT[1]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WO1' min="0" max="100" disabled value={this.state.WO[1]} onChange={this.handleChange} /> </td>
                            <td></td>
                            <td> </td>
                            <td><input disabled type='number' name='MO1' min="0" max="100" value={this.state.MO[1]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='MA1' min="0" max="100" value={this.state.MA[1]} onChange={this.handleChange} /> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td><label>Maksymalny rozwój</label></td>
                            <td><input type='number' name='AT2' min="0" max="100" disabled value={this.state.AT[2]} /> </td>
                            <td><input type='number' name='WO2' min="0" max="100" disabled value={this.state.WO[2]} /> </td>
                            <td></td>
                            <td></td>
                            <td><input type='number' name='MO2' min="0" max="100" disabled value={this.state.MO[2]} /> </td>
                            <td><input type='number' name='MA2' min="0" max="100" disabled value={this.state.MA[2]} /> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td><label>Aktualny rozwój</label></td>
                            <td><input type='number' name='AT3' min="0" max="100" value={this.state.AT[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WO3' min="0" max="100" value={this.state.WO[3]} onChange={this.handleChange} /> </td>
                            <td></td>
                            <td> </td>
                            <td><input type='number' name='MO3' min="0" max="100" value={this.state.MO[3]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='MA3' min="0" max="100" value={this.state.MA[3]} onChange={this.handleChange} /> </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><label>Modyfikatory</label></td>
                            <td><input type='number' name='AT4' min="0" max="100" value={this.state.AT[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='WO4' min="0" max="100" value={this.state.WO[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='SB4' min="0" max="100" value={this.state.SB[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='RE4' min="0" max="100" value={this.state.RE[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='MO4' min="0" max="100" value={this.state.MO[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='MA4' min="0" max="100" value={this.state.MA[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='IP4' min="0" max="100" value={this.state.IP[4]} onChange={this.handleChange} /> </td>
                            <td><input type='number' name='FP4' min="0" max="100" value={this.state.FP[4]} onChange={this.handleChange} /> </td>
                        </tr>
                        <tr>
                            <td><label>Aktualna wartość</label></td>
                            <td><input disabled type='number' name='AT5' min="0" max="100" value={this.state.AT[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='WO5' min="0" max="100" value={this.state.WO[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='SB5' min="0" max="100" value={this.state.SB[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='RE5' min="0" max="100" value={this.state.RE[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='MO5' min="0" max="100" value={this.state.MO[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='MA5' min="0" max="100" value={this.state.MA[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='IP5' min="0" max="100" value={this.state.IP[5]} onChange={this.handleChange} /> </td>
                            <td><input disabled type='number' name='FP5' min="0" max="100" value={this.state.FP[5]} onChange={this.handleChange} /> </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div id='Professions' className='Main_Div'>
                <form>
                    <Add_more_profesions />
                </form>
            </div>
            <div id='skills' class='Main_Div'>
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
                                <td >Profesja</td>
                                <td >Poziom</td>
                                <td >Zdolności</td>
                                <td >Inne</td>
                                <td >Suma</td>
                            </tr>
                            <Component_for_skills current_states={this.state} number="0" />
                            <tr>
                                <th colSpan='7'>Umiejętności zaawansowane</th>
                            </tr>
                            <Component_for_skills current_states={this.state} number="1" />
                        </tbody>
                    </table>
                </form>
            </div>
            
        </div>
    }
}

export default Character_Attributes