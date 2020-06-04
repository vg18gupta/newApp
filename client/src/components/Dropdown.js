import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../App.css'
import './Loading.css'


export default class Dropdown extends Component{

    constructor(props) {
        super(props);
    }
    
    render(){
       
        return(
            <div>
  <div className="title">
    <h2>Choose Your Topic</h2>
  </div>
<div className="selectWrapper">
<select  name='topic' value={this.props.parent.state.topic} onChange={this.props.parent.handleChangeTopic}>
  <option name='business' value='business'>Business</option>
  <option name='entertainment' value='entertainment'>Entertainment</option>
  <option name='world' value='world'>world</option>
  <option name='health' value='health'>health</option>
  <option name='science' value='science'>science</option>
  <option name='sports' value='sports'>sports</option>
  <option name='technology' value='technology'>technology</option>
</select> 
</div> 
<br></br>               
<div className="title">
    <h2>Choose Your Language</h2>
  </div>
<div className="selectWrapper">
<select name='language' value={this.props.parent.state.language} onChange={this.props.parent.handleChangeLanguage}>
  <option  value='af'>Afrikaans</option>
  <option  value='sq'>Albanian</option>
  <option  value='sm'>Amharic</option>
  <option  value='az'>Azerbaijani</option>
  <option  value='nl'>Dutch</option>
  <option  value='en'>English</option>
  <option  value='de'>German</option>
  <option  value='hi'>Hindi</option>
  <option  value='mr'>Marathi</option>
  <option  value='pa'>Punjabi</option>
</select> 
</div>

            </div>
        )
    }
}