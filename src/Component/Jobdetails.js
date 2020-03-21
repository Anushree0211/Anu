import React, {Component} from 'react';
class Jobdetails extends Component{
    continue =e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }   
    render(){
        const{handleChange, jobTitle, jobCompany, jobLocation} =this.props;
        return(
        <>
         <div className="ss">
        <h2> Enter your Job information:</h2>
        <label>
            <input 
            type ='text'
            name ='jobTitle'
            placeholder='Title'
            value= {jobTitle}
            onChange={handleChange('jobTitle')}
            />
        </label> <br />
        <br />
        <label>
            <input 
            type ='text'
            name ='jobCompany'
            placeholder='Company'
            value={jobCompany}
            onChange={handleChange('jobCompany')}
            />
        </label> <br />
        <br />

        <label>
            <input 
            type ='text'
            name ='jobLocation'
            placeholder='Location'
            value={jobLocation}
            onChange={handleChange('jobLocation')}
            />
        </label>
        <br />
        <br />
        <button className='Back' onClick={this.back}> BACK </button>
        
        <button className='Next' onClick={this.continue}> NEXT>> </button>

        </div>
        </>
            );
    
            }
        }
            export default Jobdetails;