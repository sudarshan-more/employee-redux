import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import "./profilejson.module.css"
import Axios from 'axios';
import {Link , NavLink} from 'react-router-dom'
import editprofilejson from './editprofilejson';

 class profilejson extends Component {
     constructor(){
         super()
         this.state={
             userData:[]
     }
    }

    componentDidMount(){
     const id= localStorage.getItem("id");
     console.log(id)
    Axios.get(`http://localhost:8082/emp/${id}`).then(res=>{
        console.log("response",res.data)
        setTimeout(() => {
            this.setState({userData:res.data})
        }, 2000);
    }
    );
     console.log("states*******", this.state)
    }
  
  render() {
console.log("state in render",this.state)

    return (
<div class="container emp-profile">
    <h1>PROFILE </h1>
            <form >
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={this.state.userData.profilepic} alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {this.state.userData.firstname}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <NavLink to="#home" class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="false">About</NavLink>
                                </li>
                                {/* <li class="nav-item">
                                    <NavLink to="#edit" class="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="edit" aria-selected="true">Edit Details</NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                      <Link to="/editprofilejson"> <button type="button" onClick={editprofilejson} name="edit profile">Edit profiilia</button></Link>
                        {/* <NavLink to="/editprofilejson" type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>SKILLS</p>
                            {this.state.userData.skills}
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userData.id}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userData.firstname}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userData.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userData.mobile}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.userData.gender}</p>
                                            </div>
                                        </div>
                            </div>
                            
                            <div class="tab-pane fade" id="edit" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
        
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
  }
}

export default profilejson