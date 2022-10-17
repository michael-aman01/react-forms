import { React, useRef, useState } from 'react'


const Form = () => {
    const userName = useRef();
    const userEmail = useRef();
    const userPhoneNumber = useRef();
    const userPhoneType = useRef();
    const userStaff = useRef();
    const userBio = useRef();
    const userNotification = useRef();
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        notification: ','
    })

    const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
  
        let errors = validates();
        
   
        setErrors(errors)
        
    };

    const handleChange = (incomingKey) => {
        return (e) => {
            e.preventDefault()
            const userObj  = Object.assign({},user,{[incomingKey] : e.target.value})
            setUser(userObj)
            console.log(userObj)
        }  
    }


    const validates = () => {
        let errors = []
        if(user.name.length === 0){errors.push("User name cannot be empty")} //name
        if(user.email.length === 0){errors.push("Email cannot be empty")}
        if(user.phoneNumber.length !== 10 ||  parseInt(user.phoneNumber).toString() !== user.phoneNumber){errors.push("Invalid Phone Number")}
        if(user.bio.length > 280){errors.push("Bio exceeds 280 char max");}
        
        return errors
    }

    const showErrors = () => {
        if(errors.length){
            return (
                <ul>
                       { errors.map((err,i) => 
                       <li key={i}>{err}</li>
                       )
                    }
                </ul> 
            )
        }else{
            return(
                null
            )
        }
    }

    return(
        <>
            <h1>Hello From Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={user.name} placeholder="name" onChange={handleChange("name")} ref={userName}></input>
                <input type="email" value={user.email} placeholder="email" onChange={handleChange("email")} ref={userEmail}></input>
                <input type="text" value={user.phoneNumber} placeholder="phoneNumber" onChange={handleChange("phoneNumber")} ref={userPhoneNumber}></input>
                <select value={user.phoneType} onchange={handleChange("phoneType")} ref={userPhoneType}>
                    <option values="home" selected="selected">Home</option>
                    <option values="work">Work</option>
                    <option values="mobile">Mobile</option>
                </select>
                <br></br>
                <textarea value={user.bio} placeholder="bio" onChange={handleChange("bio")} ref={userBio}></textarea>
                <br></br>

                <label>
                <label>Instructor
                    <input type="radio" value="instructor" name="staff"></input>
                </label>
                 <label>Student
                    <input type="radio" value="student"  name="staff"></input>
                </label>
                </label>

     
                <br></br>
                <label>Would you like notifications?</label>
                <input type="checkbox" id="notification" ></input>
                <br></br>
                <button>Submit</button>
            </form>

                {showErrors()}

        </>

    )
}

export default Form