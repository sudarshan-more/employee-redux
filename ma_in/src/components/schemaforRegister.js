// export function validate(formData, errors) {
//   if (formData.pass1 !== formData.pass2) {
//     errors.pass2.addError("Passwords don't match");
//   }
//   return errors;
// }

export const customFormats = {
    'expression': /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
};

export const schema =
{
    "title": "",
    "type": "object",
    "required": [
        "firstName",
        "lastName",  
        "email",
        "password",
        "DateofBirth",
        "skills",
        "file",
        "mobile",
        "GenderRadio"

    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "email": {
            "type": "string",
            "title": "email",
            "format": "expression"
        },
        "password": {
            "type": "string",
            "title": "password",
            "minLength": 3
        },
        "DateofBirth": {
            "type": "string",
            "format": "date",
            "title": "DateofBirth"
        },
        "GenderRadio": {
            "type": "string",
            "title": "Gender",
            "enum": [
                "male",
                "female",
            ]
        },

        "mobile": {
            "type": "string",
            "title": "Mobile Number",
            "minLength": 10
        },

        "skills": {
            "type": 'array',
            "title": 'Skills',
            "items": {
                "enum": [
                    'JAVA',
                    'Python',
                    'React',
                    'C++',
                    'Scala',
                    'JavaScript'
                ],
                "type": 'string'
            },
            "uniqueItems": true,
        },
        "file": {
            "type": "string",
            "format": "data-url",
            "title": "Profile Picture"
        }
    }
}

export const uiSchema = {

    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },

    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },

    "DateofBirth": {
        "ui:widget": "alt-date",
        "ui:options": {
            "yearsRange": [
                1970,
                2030
            ]
        }
    },
    "mobile": {
        "ui:options": {
            "inputType": "tel"
        }
    },

    "GenderRadio": {
        "ui:widget": "radio",
        "ui:options": {
            "inline": true
        }

    }
}

//schema for login
 export const loginschema =
{
    "title": "",
    "type": "object",
    "required": [
        "email",
        "password"
    ],
    "properties":{
        "email": {
            "type": "string",
            "title": "email",
            "format": "expression"
        },
        "password": {
            "type": "string",
            "title": "password",
            "minLength": 3
        }
    }
}

//uiSchema for login
export const loginuiSchema={

        "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },

}






//schema for edit

export const editschema =
{
    "title": "",
    "type": "object",
    "required": [
        "firstName",
        "lastName",  
        "email",
        "password",
        "DateofBirth",
        "skills",
        "file",
        "mobile",
        "GenderRadio"

    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "email": {
            "type": "string",
            "title": "email",
            "format": "expression"
        },
        "password": {
            "type": "string",
            "title": "password",
            "minLength": 3
        },
        "DateofBirth": {
            "type": "string",
            "format": "date",
            "title": "DateofBirth"
        },
        "GenderRadio": {
            "type": "string",
            "title": "Gender",
            "enum": [
                "male",
                "female",
            ]
        },

        "mobile": {
            "type": "string",
            "title": "Mobile Number",
            "minLength": 10
        },

        "skills": {
            "type": 'array',
            "title": 'Skills',
            "items": {
                "enum": [
                    'JAVA',
                    'Python',
                    'React',
                    'C++',
                    'Scala',
                    'JavaScript'
                ],
                "type": 'string'
            },
            "uniqueItems": true,
        },
        "file": {
            "type": "string",
            "format": "data-url",
            "title": "Profile Picture"
        }
    }
}

export const edituiSchema = {

    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:help": "give valid name"
    },

    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },

    "DateofBirth": {
        "ui:widget": "alt-date",
        "ui:options": {
            "yearsRange": [
                1970,
                2030
            ]
        }
    },
    "mobile": {
        "ui:options": {
            "inputType": "tel",
            "ui:help": "give 10 digit valid INDIAN cellular number!"
        }
    },

    "GenderRadio": {
        "ui:widget": "radio",
        "ui:options": {
            "inline": true
        }

    },

    "file":{
        // "ui:widget":"image",
        "ui:help":"image size should be in between 10kb, 20000kb"
    },

    "skills":{
        "ui:help":"atleast select one skill"
    },
    "email":{
        "ui:widget":"email",
        "ui:help":"provide valid email"
    }
}
// export const editformData ={
//       "firstName":`${this.state.firstname}`,
//         "lastName":`${this.state.lastname}`,
//         "email":`${this.state.email}`,
//         "password":`${this.state.password}`,
//         "DateofBirth":`${this.state.dateofbirth}`,
//         "skills":`${this.state.skills}`,
//         "file":`${this.state.profilepic}`,
//         "mobile":`${this.state.mobile}`,
//         "GenderRadio":`${this.state.gender}`,

// }