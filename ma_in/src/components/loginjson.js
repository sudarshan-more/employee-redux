import React,{Component} from 'react';
import Form from 'react-jsonschema-form'
import {loginuiSchema, loginschema } from './schemaforRegister'
import axios from 'axios';
import  {Link, Redirect} from "react-router-dom";


class loginjsos extends Component{
    constructor(){
        super()
        this.state={
            loginsuccess:false
        }
        this.onsubmithandle=this.onsubmithandle.bind(this)
    }
    onsubmithandle(formResponse){
    const userData = formResponse.formData;
    console.log(userData)
        axios.post("http://localhost:8082/emp/login",{email: userData.email,
        password:userData.password,}).then(res => {
        console.log("Response of login",res)
          if(res.status===400){
            alert("no connection")
          }
          else if(res.status===200){
          alert("user logged successfully",
          localStorage.setItem("id",res.data.id),
          this.setState({loginsuccess:true})
          )
          }
        //   console.log(res);
          console.log("loggedin successfully");
    
        });
    }
    
    
    render(){
        return(
            <div> 
             {/* {!(localStorage.getItem("id")==null)&& <Redirect to="/profilejson" />} */}
              {this.state.loginsuccess && <Redirect to="/profilejson" />}
            <h1>Login</h1>
            <Form 
              schema={loginschema}
              uiSchema={loginuiSchema} 
              onSubmit={this.onsubmithandle}
              />
            </div>
            )
    }
}
export default loginjsos