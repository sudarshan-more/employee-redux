import React from "react";
import { Button , Form , Col , InputGroup  } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileBase64 from "react-file-base64"
import Select from 'react-select';
//import ImageUploader from 'react-images-upload';
import axios from 'axios';

 const options = [
  { value: 'java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'python', label: 'Python' },
];
class useForm extends React.Component {

    constructor(props){
        super(props);
        this.state={

            firstname:"",
            lastname:"",
            email:"",
            password:"",
            mobile:"",
            date:"",
            gender:"",
            selectedOption:[],
            profilepic:"",
            validated:false
        }
     this.changeInput=this.changeInput.bind(this);
     this.handleSubmit=this.handleSubmit.bind(this);
     this.dateChange= this.dateChange.bind(this);
     this.onDrop = this.onDrop.bind(this);
     console.log("prev state",this.state)
    }
    onDrop(profilepic) {
        this.setState({
            profilepic: profilepic,
        });
    }
    dateChange(d){
        this.setState({
            date:d
        })
    }
      handleSubmit(event)  {
        event.preventDefault();
        const form = event.currentTarget;
            if(form.checkValidity()===false){
            event.preventDefault();
            event.stopPropagation();
            alert("enter correct values")
            }
            this.setState({validated:true})
          console.log("new state", this.state);
      let iD = Math.floor(Math.random() * 10000)+1;

      if(!this.state.validated){

        const body={
        id : iD,
        firstname:this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password:this.state.password,
        mobile:this.state.mobile,
        date:this.state.date,
        gender:this.state.gender,
        profilepic:this.state.profilepic,
        selectedOption:this.state.selectedoption.join(",")
        }
      axios.post(`http://localhost:8082/emp/addemp`, {
        id : iD,
        firstname:this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password:this.state.password,
        mobile:this.state.mobile,
        date:this.state.date,
        gender:this.state.gender,
        profilepic:this.state.profilepic
        })
        .then(res => {
          console.log(res);
          console.log("added successfully")
        })
      }
     }

    changeInput(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log({[event.target.name]: event.target.value})
  }
  handleOptions = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

   // Callback~
  getFiles(files){
    this.setState({ files: files })
  }

    
render(){
    
  return (
   <>

    <Form noValidate validated={this.state.validated}  onSubmit={this.handleSubmit} >
      <h1>Employee form</h1>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"
            onChange={this.changeInput}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={this.changeInput}

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="7" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
             type="email"
             
              placeholder="Username"
              name="email"
              aria-describedby="inputGroupPrepend"
              required
              onChange={this.changeInput}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
             <Form.Group as={Col} md="5" controlId="validationCustom08">
          <Form.Label>Dateofbirth</Form.Label>
          <DatePicker name="date" selected={this.state.date} value={this.state.date} onChange={this.dateChange} required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>
      
    </Form.Row>

         <Form.Row>

        <Form.Group as={Col} md="5" controlId="validationCustom06">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="tel"
           placeholder="Mobile"
           name="mobile"
           maxLength="10" minLength="10"
            onChange={this.changeInput}
            required
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom07">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password"
          name="password"
          type="password"
          onChange={this.changeInput}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        {/* date of birth*/}
   
        
        
         <Form.Group as={Col} md="5" controlId="validationCustom09">
          <Form.Label>Gender</Form.Label>
           <Form.Check type="radio"
          name="gender"
         value="male" 
         label="Male"
          onChange={this.changeInput}
          />
           <Form.Check type="radio"
          name="gender" 
        value="female" 
        label="Female"
          onChange={this.changeInput}
          required
           />
         <Form.Control.Feedback type="invalid">
            Please provide gender.
          </Form.Control.Feedback>
        </Form.Group>
        
         <Form.Group as={Col} md="3" controlId="validationCustom06">
         <Form.Label>KeySkills</Form.Label>
        
        <Select
        value={this.state.selectedOption}
        onChange={this.handleOptions}
        options={options}
        isMulti={true}
        required
      />
         <Form.Control.Feedback type="invalid">
            Please select your skills.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustom06">
          <Form.Label>Upload picture</Form.Label>
      {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}

            /> */}

            
     <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
            </Form.Group>

     </Form.Row>




      <Button type="submit">Submit form</Button>
    </Form>
    </>

  );
}
}


export default useForm;


  // let skills = this.state.skills;
    // console.log("Skills..",skills);

 {/* <Multiselect onChange={this.handleoptions} data={data} value={this.state.skills} multiple required/> */}
// render(<FormExample />);



    // validated={validated} onSubmit={handleSubmit}

  
    //   <Form.Row>
    //     <Form.Group as={Col} md="6" controlId="validationCustom03">
    //       <Form.Label>City</Form.Label>
    //       <Form.Control type="text" placeholder="City" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid city.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="3" controlId="validationCustom04">
    //       <Form.Label>State</Form.Label>
    //       <Form.Control type="text" placeholder="State" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid state.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="3" controlId="validationCustom05">
    //       <Form.Label>Zip</Form.Label>
    //       <Form.Control type="text" placeholder="Zip" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid zip.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //   </Form.Row>



 // const [validated, setValidated] = useState(false);
//   const [selecteddate, setDate] = useState ("1-1-2000");



//   const handleSubmit = event => {
//     const form = event.currentTarget;
//     console.log(form);
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };


 // const [validated, setValidated] = useState(false);
//   const [selecteddate, setDate] = useState ("1-1-2000");



//   const handleSubmit = event => {
//     const form = event.currentTarget;
//     console.log(form);
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

    {/* <Form.Group as ={Col} md="6" controlId="ControlSelect">
    <Form.Label>Select your skills</Form.Label>
    <Form.Control as="select" multiple onChange={this.handleoptions} value=" " required>
      <option>java</option>
      <option>c++</option>
      <option>c</option>
      <option>c#</option>
      <option>Python</option>
      <option>javascript</option>
    </Form.Control>
     <Form.Control.Feedback type="invalid">
            Please select your skills.
          </Form.Control.Feedback>
    </Form.Group> */}
{/* 
      <Form.Group as={Col} md="6" controlId="validationCustom06">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group> */}