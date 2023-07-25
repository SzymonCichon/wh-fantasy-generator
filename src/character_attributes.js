import React from 'react';
import './App.css';
import data from './data.json';

class Character_Attributes extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.WS0 = 0
        this.BS0 = 0
        this.S0 = 0
        this.T0 = 0
        this.AG0 = 0
        this.INT0 = 0
        this.WP0 = 0
        this.FEL0 = 0
    }
    handleChange(e) {
        console.log(e.target.value);
        
        this.setState({[e.target.name]: e.target.value});

    }
    render() {
        return <div id='character_attributes' class = 'Main_Div'>
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
                        <td><input type='number' name='WS0' min="0" max = "100" value = {this.WS0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='BS0' min="0" max = "100" value = {this.BS0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='S0' min="0" max = "100"value = {this.S0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='T0' min="0" max = "100"value = {this.T0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='AG0' min="0" max = "100"value = {this.AG0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='INT0' min="0" max = "100"value = {this.INT0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='WP0' min="0" max = "100"value = {this.WP0} onChange={this.handleChange}/> </td>
                        <td><input type='number' name='FEL0' min="0" max = "100"value = {this.FEL0} onChange={this.handleChange}/> </td>
                    </tr>
                    <tr>
                        <td><label>Zdolności</label></td>  
                        <td><input type='number' name='WS1' min="0" disabled max = "100"/> </td>
                        <td><input type='number' name='BS1' min="0" disabled max = "100"/> </td>
                        <td><input type='number' name='S1' min="0" disabled max = "100"/> </td>
                        <td><input type='number' name='T1' min="0"disabled  max = "100"/> </td>
                        <td><input type='number' name='AG1' min="0" disabled max = "100"/> </td>
                        <td><input type='number' name='INT1' min="0"disabled  max = "100"/> </td>
                        <td><input type='number' name='WP1' min="0"disabled  max = "100"/> </td>
                        <td><input type='number' name='FEL1' min="0"disabled  max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Maksymalny rozwój</label></td>  
                        <td><input type='number' name='WS2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='BS2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='S2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='T2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='AG2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='INT2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='WP2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='FEL2' min="0" max = "100" disabled/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualny rozwój</label></td>  
                        <td><input type='number' name='WS3' min="0" max = "100"/> </td>
                        <td><input type='number' name='BS3' min="0" max = "100"/> </td>
                        <td><input type='number' name='S3' min="0" max = "100"/> </td>
                        <td><input type='number' name='T3' min="0" max = "100"/> </td>
                        <td><input type='number' name='AG3' min="0" max = "100"/> </td>
                        <td><input type='number' name='INT3' min="0" max = "100"/> </td>
                        <td><input type='number' name='WP3' min="0" max = "100"/> </td>
                        <td><input type='number' name='FEL3' min="0" max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Modyfikatory</label></td>  
                        <td><input type='number' name='WS4' min="0" max = "100"/> </td>
                        <td><input type='number' name='BS4' min="0" max = "100"/> </td>
                        <td><input type='number' name='S4' min="0" max = "100"/> </td>
                        <td><input type='number' name='T4' min="0" max = "100"/> </td>
                        <td><input type='number' name='AG4' min="0" max = "100"/> </td>
                        <td><input type='number' name='INT4' min="0" max = "100"/> </td>
                        <td><input type='number' name='WP4' min="0" max = "100"/> </td>
                        <td><input type='number' name='FEL4' min="0" max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualna wartość</label></td>  
                        <td><input disabled type='number' name='WS5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='BS5' min="0" max = "100"/> </td>
                        <td><input  disabledtype='number' name='S5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='T5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='AG5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='INT5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='WP5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='FEL5' min="0" max = "100"/> </td>
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
                        <td><input type='number' name='A0' min="0" max = "100"/> </td>
                        <td><input type='number' name='W0' min="0" max = "100"/> </td>
                        <td><input type='number' name='SB0' min="0" max = "100"/> </td>
                        <td><input type='number' name='TB0' min="0" max = "100"/> </td>
                        <td><input type='number' name='M0' min="0" max = "100"/> </td>
                        <td><input type='number' name='MAG0' min="0" max = "100"/> </td>
                        <td><input type='number' name='IP0' min="0" max = "100"/> </td>
                        <td><input type='number' name='FP0' min="0" max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Zdolności</label></td>  
                        <td><input disabled type='number' name='A1' min="0" max = "100"/> </td>
                        <td> </td>
                        <td></td>
                        <td><input  disabledtype='number' name='TB1' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='M1' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='MAG1' min="0" max = "100"/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><label>Maksymalny rozwój</label></td>  
                        <td><input type='number' name='A2' min="0" max = "100" disabled/> </td>
                        <td> </td>
                        <td></td>
                        <td><input type='number' name='TB2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='M2' min="0" max = "100" disabled/> </td>
                        <td><input type='number' name='MAG2' min="0" max = "100" disabled/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualny rozwój</label></td>  
                        <td><input type='number' name='A3' min="0" max = "100"/> </td>
                        <td> </td>
                        <td></td>
                        <td><input type='number' name='TB3' min="0" max = "100"/> </td>
                        <td><input type='number' name='M3' min="0" max = "100"/> </td>
                        <td><input type='number' name='MAG3' min="0" max = "100"/> </td>
                        <td> </td>
                        <td><input type='number' name='FP3' min="0" max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Modyfikatory</label></td>  
                        <td><input type='number' name='A4' min="0" max = "100"/> </td>
                        <td><input type='number' name='W4' min="0" max = "100"/> </td>
                        <td><input type='number' name='SB4' min="0" max = "100"/> </td>
                        <td><input type='number' name='TB4' min="0" max = "100"/> </td>
                        <td><input type='number' name='M4' min="0" max = "100"/> </td>
                        <td><input type='number' name='MAG4' min="0" max = "100"/> </td>
                        <td><input type='number' name='IP4' min="0" max = "100"/> </td>
                        <td><input type='number' name='FP4' min="0" max = "100"/> </td>
                    </tr>
                    <tr>
                        <td><label>Aktualna wartość</label></td>  
                        <td><input disabled type='number' name='A5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='W5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='SB5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='TB5' min="0" max = "100"/> </td>
                        <td><input  disabled type='number' name='M5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='MAG5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='IP5' min="0" max = "100"/> </td>
                        <td><input disabled type='number' name='FP5' min="0" max = "100"/> </td>
                    </tr>
                </table>
            </form>
        </div>;
    }
}

export default Character_Attributes