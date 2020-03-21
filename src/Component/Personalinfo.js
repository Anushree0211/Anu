import React, {Component} from 'react';

import './Personalinfo.css';


class Personalinfo extends Component{
    continue =e =>{

        e.preventDefault();
        this.props.nextStep();
    }
render(){
    const{handleChange, lastName, firstName} =this.props;
    return(
    <>
     <div className="ss">
    <h2> Enter your personal information:</h2>
    <label>
        <input 
        type ='text'
        name ='firstName'
        placeholder='First Name'
        value={firstName}
        onChange={handleChange('firstName')}
        />
    </label> <br />
    <br />

    <label>
        <input 
        type ='text'
        name ='lastName'
        placeholder='Last Name'
        value={lastName}
        onChange={handleChange('lastName')}
        />
    </label>
    <br />
    <br />
    <button className='Next' onClick={this.continue}> NEXT>> </button>
    </div>
    </>
        );

        }
}
export default Personalinfo;