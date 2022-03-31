import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card  from 'react-bootstrap/Card'



const UserForm= () => {
    const [user, setUser] = useState({
        full_name: "",
        username: "",
        email: "",
    });

    const history = useHistory()

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if ([user.full_name, user.username, user.email].some(val => val.trim() === "")) {
            alert("Please fill in all blanks")
        }
        const newUser = {
            full_name: user.full_name,
            username: user.username,
            email: user.email
        }
        fetch("http://localhost:9393/users", {
            method: "POST",
            headers:{
                "Content_Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        .then(()=>history.push("/"))
    }
    return (
        <Card className='new-user' style={{ width: '30rem', margin:'auto'}}>
            <Card.Header>New User Sign Up</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="full_name">Full Name: </label><br/>
                    <input className="formcss" onChange={handleChange} text="text" name="full_name" value={user.full_name} required/><br/>
                    <br/>
                    <label htmlFor="username">Username: </label><br/>
                    <input className="formcss" onChange={handleChange} text="text" name="username" value={user.username} required/><br/>
                    <br/>
                    <label htmlFor="email">Email: </label><br/>
                    <input className="formcss" onChange={handleChange} text="text"  name="email" value={user.email} required/>
                    <br/>
                    <input type="submit"/>
                </form>
            </Card.Body>
        </Card>
    )
}

export default UserForm;