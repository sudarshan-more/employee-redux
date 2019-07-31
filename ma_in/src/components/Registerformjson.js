import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { schema  ,uiSchema,validate,customFormats }  from './schemaforRegister';
import axios from 'axios';


 class Registerformjson extends Component {
  onSubmitHandler(formResponse){
    console.log("Form data",formResponse.formData)
    const userData = formResponse.formData;
    let joinedSkills = userData.skills.join(',');
    console.log("Skills",userData.skills.join(','))
   axios.post(`http://localhost:8082/emp/addemp`, {
        id : Math.floor(Math.random() * 10000)+1,
        firstname:userData.firstName,
        lastname: userData.lastName,
        email: userData.email,
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
          alert("user registered successfully",
          localStorage.setItem("id",res.data.id)
          )
          }
          
          console.log(res);
          console.log("added successfully")
        })
}
  render() {
    return (
      <div>
        <h1>Employeee Details Form</h1>
      <Form 
          schema={schema}
          uiSchema={uiSchema}
         // validate={validate}
          // onChange={log("changed")}
          onSubmit={this.onSubmitHandler}
          // onError={log("errors")}
          // formData={formData}
          customFormats={customFormats}
           />
      </div>
    )
  }
}
export default Registerformjson



