import React, {Component} from 'react';

class Alldetails extends Component{
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
}
render(){
    const{ firstName , lastName ,jobTitle , jobCompany, jobLocation} = this.props;
return(
<>
<h2> Here is The Information you entered</h2>
First Name: <b>{firstName} </b><br />
Last Name: <b> {lastName}</b><br />
Job: <b>{jobTitle}</b><br />
Company: <b>{jobCompany}</b><br />
Location:<b>{jobLocation}</b><br />
<button className='Back' onClick={this.back}>
   BACK
</button> 
</>
     );

   }  
}

export default Alldetails;

