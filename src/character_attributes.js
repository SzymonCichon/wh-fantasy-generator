import React from 'react';
import './App.css';
import data from './data.json';
//Creating object creating datalists for professions
var Create_Datalists_Class = (props) => {
    var options = []
    for(var i = 0; i<data.professions.polish.profession_names.length;i++)
    {
        options.push(<option value={data.professions.polish.profession_names[i] }/>)
    }
    
        return options
}

var Component_for_skills = (props) => {
    return <tr>
        <td className='attribute_names'><label>{data.skills.skill_generation_polish_names.skill_names[props.number] }</label></td>
        <td className='skill_attribute'><label>{data.skills.skill_generation_polish_names.stat_names[props.number]}</label></td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 0} min='0' max = '100' disabled value={props.current_state}/> </td>
        <td className='skill_attribute'><input list='skill_percentage' name={data.skills.skill_generation_input_name[props.number] + 1} /> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 2} min='0' max = '100' disabled/> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 3} min='0' max = '100' /> </td>
        <td className='skill_attribute'><input type='number' name={data.skills.skill_generation_input_name[props.number] + 4} min='0' max = '100' disabled/> </td>
    </tr>
}

//Generating extra professions slots
class Add_more_profesions extends React.Component{
    constructor(props) {
        super(props);
        
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

class Character_Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            WS0 : 0,        
            WS1 : 0,
            WS2 : 0,
            WS3 : 0,
            WS4 : 0,
            WS5 : 0,
            BS0 : 0,
            BS1 : 0,
            BS2 : 0,
            BS3 : 0,
            BS4 : 0,
            BS5 : 0,
            S0 : 0,
            S1 : 0,
            S2 : 0,
            S3 : 0,
            S4 : 0,
            S5 : 0,
            T0 :0,
            T1 :0,
            T2 :0,
            T3 :0,
            T4 :0,
            T5 :0,
            AG0 : 0,
            AG1 : 0,
            AG2 : 0,
            AG3 : 0,
            AG4 : 0,
            AG5 : 0,
            INT0 : 0,
            INT1 : 0,
            INT2 : 0,
            INT3 : 0,
            INT4 : 0,
            INT5 : 0,
            WP0 : 0,
            WP1 : 0,
            WP2 : 0,
            WP3 : 0,
            WP4 : 0,
            WP5 : 0,
            FEL0 : 0,
            FEL1 : 0,
            FEL2 : 0,
            FEL3 : 0,
            FEL4 : 0,
            FEL5 : 0,
            A0 : 0,
            A1 : 0,
            A2 : 0,
            A3 : 0,
            A4 : 0,
            A5 : 0,
            W0 : 0,
            W1 : 0,
            W2 : 0,
            W3 : 0,
            W4 : 0,
            W5 : 0,
            SB0 : 0,
            SB4 : 0,
            SB5 : 0,
            TB0 : 0,
            TB4 : 0,
            TB5 : 0,
            M0 : 0,
            M1 : 0,
            M2 : 0,
            M3 : 0,
            M4 : 0,
            M5 : 0,
            MAG0 : 0,
            MAG1 : 0,
            MAG2 : 0,
            MAG3 : 0,
            MAG4 : 0,
            MAG5 : 0,
            IP0 : 0,
            IP4 : 0,
            IP5 : 0,
            FP0 : 0,
            FP4 : 0,
            FP5 : 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    SetWS = () =>
    {
        var a = parseInt(this.state.WS0)+parseInt(this.state.WS1)+parseInt(this.state.WS3)+parseInt(this.state.WS4)
        this.setState({WS5 : a})
    }
    SetBS = () =>
    {
        var a = parseInt(this.state.BS0)+parseInt(this.state.BS1)+parseInt(this.state.BS3)+parseInt(this.state.BS4)
        this.setState({BS5 : a})
    }
    SetS = () =>
    {
        var a = parseInt(this.state.S0)+parseInt(this.state.S1)+parseInt(this.state.S3)+parseInt(this.state.S4)
        this.setState({S5 : a})
        a = Math.floor(a/10)
        this.setState({SB0 : a})
    }
    SetT = () =>
    {
        var a = parseInt(this.state.T0)+parseInt(this.state.T1)+parseInt(this.state.T3)+parseInt(this.state.T4)
        this.setState({T5 : a})
        a = Math.floor(a/10)
        this.setState({TB0 : a})
    }
    SetAG = () =>
    {
        var a = parseInt(this.state.AG0)+parseInt(this.state.AG1)+parseInt(this.state.AG3)+parseInt(this.state.AG4)
        this.setState({AG5 : a})
    }
    SetINT = () =>
    {
        var a = parseInt(this.state.INT0)+parseInt(this.state.INT1)+parseInt(this.state.INT3)+parseInt(this.state.INT4)
        this.setState({INT5 : a})
    }
    SetWP = () =>
    {
        var a = parseInt(this.state.WP0)+parseInt(this.state.WP1)+parseInt(this.state.WP3)+parseInt(this.state.WP4)
        this.setState({WP5 : a})
    }
    SetFEL = () =>
    {
        var a = parseInt(this.state.FEL0)+parseInt(this.state.FEL1)+parseInt(this.state.FEL3)+parseInt(this.state.FEL4)
        this.setState({FEL5 : a})
    }
    SetA = () =>
    {
        var a = parseInt(this.state.A0)+parseInt(this.state.A1)+parseInt(this.state.A3)+parseInt(this.state.A4)
        this.setState({A5 : a})
    }
    SetW = () =>
    {
        var a = parseInt(this.state.W0)+parseInt(this.state.W1)+parseInt(this.state.W3)+parseInt(this.state.W4)
        this.setState({W5 : a})
    }
    SetSB = () =>
    {
        var a = parseInt(this.state.SB0)+parseInt(this.state.SB4)
        this.setState({SB5 : a})
    }
    SetTB = () =>
    {
        var a = parseInt(this.state.TB0)+parseInt(this.state.TB4)
        this.setState({TB5 : a})
    }
    SetM = () =>
    {
        var a = parseInt(this.state.M0)+parseInt(this.state.M1)+parseInt(this.state.M3)+parseInt(this.state.M4)
        this.setState({M5 : a})
    }
    SetMAG = () =>
    {
        var a = parseInt(this.state.MAG0)+parseInt(this.state.MAG1)+parseInt(this.state.MAG3)+parseInt(this.state.MAG4)
        this.setState({MAG5 : a})
    }
    SetIP = () =>
    {
        var a = parseInt(this.state.IP0)+parseInt(this.state.IP4)
        this.setState({IP5 : a})
    }
    SetFP = () =>
    {
        var a = parseInt(this.state.FP0)+parseInt(this.state.FP4)
        this.setState({FP5 : a})
    }
    
    handleChange(e) {
        if (e.target.name == "WS0") {
            this.setState({ WS0: e.target.value }, () => {
                this.SetWS()
            });
        }
        if (e.target.name == "WS3") {
            if (this.state.WS2 >= e.target.value) {
                this.setState({ WS3: e.target.value }, () => {
                    this.SetWS()
                });
            }
        }
        if (e.target.name == "WS4") {
            this.setState({ WS4: e.target.value }, () => {
                this.SetWS()
            });
        }


        if (e.target.name == "BS0") {
            this.setState({ BS0: e.target.value }, () => {
                this.SetBS()
            });
        }
        if (e.target.name == "BS3") {
            if (this.state.BS2 >= e.target.value)
            this.setState({ BS3: e.target.value }, () => {
                this.SetBS()
            });
        }
        if (e.target.name == "BS4") {
            this.setState({ BS4: e.target.value }, () => {
                this.SetBS()
            });
        }


        if (e.target.name == "S0") {
            this.setState({ S0: e.target.value }, () => {
                this.SetS()
            });
        }
        if (e.target.name == "S3") {
            if (this.state.S2 >= e.target.value)
            this.setState({ S3: e.target.value }, () => {
                this.SetS()
            });
        }
        if (e.target.name == "S4") {
            this.setState({ S4: e.target.value }, () => {
                this.SetS()
            });
        }


        if (e.target.name == "T0") {
            this.setState({ T0: e.target.value }, () => {
                this.SetT()
            });
        }
        if (e.target.name == "T3") {
            if (this.state.T2 >= e.target.value)
            this.setState({ T3: e.target.value }, () => {
                this.SetT()
            });
        }
        if (e.target.name == "T4") {
            this.setState({ T4: e.target.value }, () => {
                this.SetT()
            });
        }


        if (e.target.name == "AG0") {
            this.setState({ AG0: e.target.value }, () => {
                this.SetAG()
            });
        }
        if (e.target.name == "AG3") {
            if (this.state.AG2 >= e.target.value)
            this.setState({ AG3: e.target.value }, () => {
                this.SetAG()
            });
        }
        if (e.target.name == "AG4") {
            this.setState({ AG4: e.target.value }, () => {
                this.SetAG()
            });
        }


        if (e.target.name == "INT0") {
            this.setState({ INT0: e.target.value }, () => {
                this.SetINT()
            });
        }
        if (e.target.name == "INT3") {
            if (this.state.INT2 >= e.target.value)
            this.setState({ INT3: e.target.value }, () => {
                this.SetINT()
            });
        }
        if (e.target.name == "INT4") {
            this.setState({ INT4: e.target.value }, () => {
                this.SetINT()
            });
        }


        if (e.target.name == "WP0") {
            this.setState({ WP0: e.target.value }, () => {
                this.SetWP()
            });
        }
        if (e.target.name == "WP3") {
            if (this.state.WP2 >= e.target.value)
            this.setState({ WP3: e.target.value }, () => {
                this.SetWP()
            });
        }
        if (e.target.name == "WP4") {
            this.setState({ WP4: e.target.value }, () => {
                this.SetWP()
            });
        }

        if (e.target.name == "FEL0") {
            this.setState({ FEL0: e.target.value }, () => {
                this.SetFEL()
            });
        }
        if (e.target.name == "FEL3") {
            if (this.state.FEL2 >= e.target.value)
            this.setState({ FEL3: e.target.value }, () => {
                this.SetFEL()
            });
        }
        if (e.target.name == "FEL4") {
            this.setState({ FEL4: e.target.value }, () => {
                this.SetFEL()
            });
        }


        if (e.target.name == "A0") {
            this.setState({ A0: e.target.value }, () => {
                this.SetA()
            });
        }
        if (e.target.name == "A3") {
            if (this.state.A2 >= e.target.value)
            this.setState({ A3: e.target.value }, () => {
                this.SetA()
            });
        }
        if (e.target.name == "A4") {
            this.setState({ A4: e.target.value }, () => {
                this.SetA()
            });
        }


        if (e.target.name == "W0") {
            this.setState({ W0: e.target.value }, () => {
                this.SetW()
            });
        }
        if (e.target.name == "W3") {
            if (this.state.W2 >= e.target.value)
            this.setState({ W3: e.target.value }, () => {
                this.SetW()
            });
        }
        if (e.target.name == "W4") {
            this.setState({ W4: e.target.value }, () => {
                this.SetW()
            });
        }


        if (e.target.name == "SB0") {
            this.setState({ SB0: e.target.value }, () => {
                this.SetSB()
            });
        }
        if (e.target.name == "SB4") {
            this.setState({ SB4: e.target.value }, () => {
                this.SetSB()
            });
        }


        if (e.target.name == "TB0") {
            this.setState({ TB0: e.target.value }, () => {
                this.SetTB()
            });
        }
        if (e.target.name == "TB4") {
            this.setState({ TB4: e.target.value }, () => {
                this.SetTB()
            });
        }


        if (e.target.name == "M0") {
            this.setState({ M0: e.target.value }, () => {
                this.SetM()
            });
        }
        if (e.target.name == "M3") {
            if (this.state.M2 >= e.target.value)
            this.setState({ M3: e.target.value }, () => {
                this.SetM()
            });
        }
        if (e.target.name == "M4") {
            this.setState({ M4: e.target.value }, () => {
                this.SetM()
            });
        }


        if (e.target.name == "MAG0") {
            this.setState({ MAG0: e.target.value }, () => {
                this.SetMAG()
            });
        }
        if (e.target.name == "MAG3") {
            if (this.state.MAG2 >= e.target.value)
            this.setState({ MAG3: e.target.value }, () => {
                this.SetMAG()
            });
        }
        if (e.target.name == "MAG4") {
            this.setState({ MAG4: e.target.value }, () => {
                this.SetMAG()
            });
        }


        if (e.target.name == "IP0") {
            this.setState({ IP0: e.target.value }, () => {
                this.SetIP()
            });
        }
        if (e.target.name == "IP4") {
            this.setState({ IP4: e.target.value }, () => {
                this.SetIP()
            });
        }
        if (e.target.name == "FP0") {
            this.setState({ FP0: e.target.value }, () => {
                this.SetFP()
            });
        }
        if (e.target.name == "FP4") {
            this.setState({ FP4: e.target.value }, () => {
                this.SetFP()
            });
        }
    }
    
    render() {
        return <div>
        <div id='character_attributes' class = 'Main_Div'>
            <form>
                <table className='stats_table'>
                    <tr>
                        <th colspan="9"><label>Cechy główne</label></th>
                    </tr>
                    <tr>
                        <td id = 'attribute_names'><label>Nazwa cechy</label></td>  
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
                        <td><input type='number' name='WS0' min="0" max = "100"  onChange={this.handleChange} value={this.state.WS0}/> </td>
                        <td><input type='number' name='BS0' min="0" max = "100" onChange={this.handleChange} value={this.state.BS0}/> </td>
                        <td><input type='number' name='S0' min="0" max = "100" onChange={this.handleChange} value={this.state.S0}/> </td>
                        <td><input type='number' name='T0' min="0" max = "100" onChange={this.handleChange} value={this.state.T0}/> </td>
                        <td><input type='number' name='AG0' min="0" max = "100" onChange={this.handleChange} value={this.state.AG0}/> </td>
                        <td><input type='number' name='INT0' min="0" max = "100" onChange={this.handleChange} value={this.state.INT0}/> </td>
                        <td><input type='number' name='WP0' min="0" max = "100" onChange={this.handleChange} value={this.state.WP0}/> </td>
                        <td><input type='number' name='FEL0' min="0" max = "100" onChange={this.handleChange} value={this.state.FEL0}/> </td>
                    </tr>
                    <tr>
                        <td><label>Zdolności</label></td>  
                        <td><input type='number' name='WS1' min="0" disabled max = "100" value={this.state.WS1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='BS1' min="0" disabled max = "100" value={this.state.BS1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='S1' min="0" disabled max = "100" value={this.state.S1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='T1' min="0"disabled  max = "100" value={this.state.T1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='AG1' min="0" disabled max = "100" value={this.state.AG1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='INT1' min="0"disabled  max = "100" value={this.state.INT1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='WP1' min="0"disabled  max = "100" value={this.state.WP1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FEL1' min="0"disabled  max = "100" value={this.state.FEL1} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Maksymalny rozwój</label></td>  
                        <td><input type='number' name='WS2' min="0" max = "100" disabled value={this.state.WS2} /> </td>
                        <td><input type='number' name='BS2' min="0" max = "100" disabled value={this.state.BS2}/> </td>
                        <td><input type='number' name='S2' min="0" max = "100" disabled value={this.state.S2}/> </td>
                        <td><input type='number' name='T2' min="0" max = "100" disabled value={this.state.T2}/> </td>
                        <td><input type='number' name='AG2' min="0" max = "100" disabled value={this.state.AG2}/> </td>
                        <td><input type='number' name='INT2' min="0" max = "100" disabled value={this.state.INT2}/> </td>
                        <td><input type='number' name='WP2' min="0" max = "100" disabled value={this.state.WP2}/> </td>
                        <td><input type='number' name='AG2' min="0" max = "100" disabled value={this.state.FEL2}/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualny rozwój</label></td>  
                        <td><input type='number' name='WS3' min="0" max = "100" value={this.state.WS3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='BS3' min="0" max = "100" value={this.state.BS3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='S3' min="0" max = "100" value={this.state.S3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='T3' min="0" max = "100" value={this.state.T3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='AG3' min="0" max = "100" value={this.state.AG3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='INT3' min="0" max = "100" value={this.state.INT3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='WP3' min="0" max = "100" value={this.state.WP3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FEL3' min="0" max = "100" value={this.state.FEL3} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Modyfikatory</label></td>  
                        <td><input type='number' name='WS4' min="-100" max = "100" value={this.state.WS4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='BS4' min="-100" max = "100" value={this.state.BS4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='S4' min="-100" max = "100" value={this.state.S4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='T4' min="-100" max = "100" value={this.state.T4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='AG4' min="-100" max = "100" value={this.state.AG4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='INT4' min="-100" max = "100" value={this.state.INT4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='WP4' min="-100" max = "100" value={this.state.WP4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FEL4' min="-100" max = "100" value={this.state.FEL4} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualna wartość</label></td>  
                        <td><input disabled type='number' name='WS5' min="0" max = "100" value={this.state.WS5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='BS5' min="0" max = "100" value={this.state.BS5} onChange={this.handleChange}/> </td>
                        <td><input  disabledtype='number' name='S5' min="0" max = "100" value={this.state.S5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='T5' min="0" max = "100" value={this.state.T5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='AG5' min="0" max = "100" value={this.state.AG5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='INT5' min="0" max = "100" value={this.state.INT5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='WP5' min="0" max = "100" value={this.state.WP5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='FEL5' min="0" max = "100" value={this.state.FEL5} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <th colspan="9"><label>Cechy drugorzędne</label></th>
                    </tr>
                    <tr>
                        <td id = 'attribute_names'><label>Nazwa cechy</label></td>  
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
                        <td><input type='number' name='A0' min="0" max = "100" value={this.state.A0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='W0' min="0" max = "100" value={this.state.W0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='SB0' min="0" max = "100" value={this.state.SB0} onChange={this.handleChange} disabled/> </td>
                        <td><input type='number' name='TB0' min="0" max = "100" value={this.state.TB0} onChange={this.handleChange} disabled/> </td>
                        <td><input type='number' name='M0' min="0" max = "100" value={this.state.M0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='MAG0' min="0" max = "100" value={this.state.MAG0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='IP0' min="0" max = "100" value={this.state.IP0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FP0' min="0" max = "100" value={this.state.FP0} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Zdolności</label></td>  
                        <td><input disabled type='number' name='A1' min="0" max = "100" value={this.state.A1} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='W1' min="0" max = "100" disabled value={this.state.W1} onChange={this.handleChange}/> </td>
                        <td></td>
                        <td> </td>
                        <td><input disabled type='number' name='M1' min="0" max = "100" value={this.state.M1} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='MAG1' min="0" max = "100" value={this.state.MAG1} onChange={this.handleChange}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><label>Maksymalny rozwój</label></td>  
                        <td><input type='number' name='A2' min="0" max = "100" disabled value={this.state.A2}/> </td>
                        <td><input type='number' name='W2' min="0" max = "100" disabled value={this.state.W2}/> </td>
                        <td></td>
                        <td></td>
                        <td><input type='number' name='M2' min="0" max = "100" disabled value={this.state.M2}/> </td>
                        <td><input type='number' name='MAG2' min="0" max = "100" disabled value={this.state.MAG2} /> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualny rozwój</label></td>  
                        <td><input type='number' name='A3' min="0" max = "100" value={this.state.A3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='W3' min="0" max = "100" value={this.state.W3} onChange={this.handleChange}/> </td>
                        <td></td>
                        <td> </td>
                        <td><input type='number' name='M3' min="0" max = "100" value={this.state.M3} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='MAG3' min="0" max = "100" value={this.state.MAG3} onChange={this.handleChange}/> </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><label>Modyfikatory</label></td>  
                        <td><input type='number' name='A4' min="0" max = "100" value={this.state.A4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='W4' min="0" max = "100" value={this.state.W4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='SB4' min="0" max = "100" value={this.state.SB4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='TB4' min="0" max = "100" value={this.state.TB4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='M4' min="0" max = "100" value={this.state.M4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='MAG4' min="0" max = "100" value={this.state.MAG4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='IP4' min="0" max = "100" value={this.state.IP4} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FP4' min="0" max = "100" value={this.state.FP4} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualna wartość</label></td>  
                        <td><input disabled type='number' name='A5' min="0" max = "100" value={this.state.A5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='W5' min="0" max = "100" value={this.state.W5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='SB5' min="0" max = "100" value={this.state.SB5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='TB5' min="0" max = "100" value={this.state.TB5} onChange={this.handleChange}/> </td>
                        <td><input  disabled type='number' name='M5' min="0" max = "100" value={this.state.M5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='MAG5' min="0" max = "100" value={this.state.MAG5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='IP5' min="0" max = "100" value={this.state.IP5} onChange={this.handleChange}/> </td>
                        <td><input disabled type='number' name='FP5' min="0" max = "100" value={this.state.FP5} onChange={this.handleChange}/> </td>
                    </tr>
                </table>
            </form>
        </div>
        <div id = 'Professions' className='Main_Div'>
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
        <div id = 'skills' class = 'Main_Div'>
            
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
                    <Component_for_skills  number={0} current_state={this.state.S0}/>
                    <Component_for_skills  number={1} current_state={this.state.S1}/>
                    <Component_for_skills  number={2} current_state={this.state.S2}/>
                    <Component_for_skills  number={3} current_state={this.state.S3}/>
                    <Component_for_skills  number={4} current_state={this.state.S4}/>
                    <Component_for_skills  number={5} current_state={this.state.S5}/>
                    <Component_for_skills  number={6} current_state={this.state.S6}/>
                    <Component_for_skills  number={7} current_state={this.state.S7}/>
                    <Component_for_skills  number={8} current_state={this.state.S8}/>
                    <Component_for_skills  number={9} current_state={this.state.S9}/>
                    <Component_for_skills  number={10} current_state={this.state.S10}/>
                    <Component_for_skills  number={11} current_state={this.state.S11}/>
                    <Component_for_skills  number={12} current_state={this.state.S12}/>
                    <Component_for_skills  number={13} current_state={this.state.S13}/>
                    <Component_for_skills  number={14} current_state={this.state.S14}/>
                    <Component_for_skills  number={15} current_state={this.state.S15}/>
                    <Component_for_skills  number={16} current_state={this.state.S16}/>
                    <Component_for_skills  number={17} current_state={this.state.S17}/>
                    <Component_for_skills  number={18} current_state={this.state.S18}/>
                    <Component_for_skills  number={19} current_state={this.state.S19}/>
                    <tr>
                        <th colSpan='7'>Umiejętności zaawansowane</th>
                    </tr>
                    <Component_for_skills  number={20} current_state={this.state.S20}/>
                    <Component_for_skills  number={21} current_state={this.state.S21}/>
                    <Component_for_skills  number={22} current_state={this.state.S22}/>
                    <Component_for_skills  number={23} current_state={this.state.S23}/>
                    <Component_for_skills  number={24} current_state={this.state.S24}/>
                    <Component_for_skills  number={25} current_state={this.state.S25}/>
                    <Component_for_skills  number={26} current_state={this.state.S26}/>
                    <Component_for_skills  number={27} current_state={this.state.S27}/>
                    <Component_for_skills  number={28} current_state={this.state.S28}/>
                    <Component_for_skills  number={29} current_state={this.state.S29}/>
                    <Component_for_skills  number={30} current_state={this.state.S30}/>
                    <Component_for_skills  number={31} current_state={this.state.S31}/>
                    <Component_for_skills  number={32} current_state={this.state.S32}/>
                    <Component_for_skills  number={33} current_state={this.state.S33}/>
                    <Component_for_skills  number={34} current_state={this.state.S34}/>
                    <Component_for_skills  number={35} current_state={this.state.S35}/>
                    <Component_for_skills  number={36} current_state={this.state.S36}/>
                    <Component_for_skills  number={37} current_state={this.state.S37}/>
                    <Component_for_skills  number={38} current_state={this.state.S38}/>
                    <Component_for_skills  number={39} current_state={this.state.S39}/>
                    <datalist id='skill_percentage'>
                        <option value='+0%'/>
                        <option value='+10%'/>
                        <option value='+20%'/>
                    </datalist>


                    </tbody>
                </table>
             </form>
        </div>
        </div>
    }
}

export default Character_Attributes