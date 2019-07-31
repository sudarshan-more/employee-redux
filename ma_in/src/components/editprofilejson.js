import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import {editschema  ,edituiSchema , customFormats  } from './schemaforRegister';
import axios from 'axios'
// import  {Link, Redirect} from "react-router-dom";
const array=new Array();
export default class editprofilejson extends Component {
     constructor(){
         super()
         this.state={
             userData:[]
     }
    }
      onSubmitHandler(formResponse){
    console.log("Form data",formResponse.formData)
    const userData = formResponse.formData;
    let joinedSkills = userData.skills.join(',');
    console.log("Skills",userData.skills.join(','))
   axios.put(`http://localhost:8082/emp/editemp`, {
        id : localStorage.getItem("id"),
        firstname:userData.firstName,
        lastname:userData.lastName,
        email:userData.email,
        password:userData.password,
        mobile:userData.mobile,
        date:userData.DateofBirth,
        gender:userData.GenderRadio,
        profilepic:userData.file,
        skills:joinedSkills
        })
        .then(res => {

          if(res.status===400){
            alert("no connection")
          }
          else if(res.status===200){
          alert("user edited successfully",
          localStorage.setItem("id",res.data.id)
          )
          }
          console.log(res);
          console.log("edited successfully")
        })
}

    componentDidMount(){
    // const skil=this.state.userData.skills;
    // let array1=skil.toString();
    //  array = array1.split(",");
     const id= localStorage.getItem("id");
     console.log(id)
    axios.get(`http://localhost:8082/emp/${id}`).then(res=>{
        console.log("response",res.data)
            this.setState({userData:res.data})
    }
    );
     console.log("states*******", this.state)
     setTimeout(() => {
         console.log("states*******", this.state)
     }, 2000);
    }

  
  
  render() {
        let skil=`${this.state.userData.skills}`;
        console.log("skils",skil)
      var array = skil.split(",");
     const editformData ={
      "firstName":this.state.userData.firstname,
        "lastName":this.state.userData.lastname,
        "email":this.state.userData.email,
        "password":this.state.userData.password,
       "DateofBirth":this.state.userData.date,
        "skills":array,
       "file":this.state.userData.profilepic,
        "mobile":this.state.userData.mobile,
        "GenderRadio":this.state.userData.gender,
}


    return (
      <div>
          {console.log("userData state",this.state.userData)}
          <Form 
          schema={editschema}
              uiSchema={edituiSchema} 
              onSubmit={this.onSubmitHandler}
              formData={editformData}
          />
      </div>
    )
    
  }
}
