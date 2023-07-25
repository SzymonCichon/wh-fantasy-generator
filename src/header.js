import React from 'react';
import './App.css';
import data from './data.json';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gods: data.character_creation[0].faith};
    }
    
    render() {
        return <div id = 'header' class = 'Main_Div'>
            <b>Generator postaci do warhammera fantasy</b>
        </div>
      }
}

export default Header;
