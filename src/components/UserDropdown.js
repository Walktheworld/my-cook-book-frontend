import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";



const UserDropdown= ({handleChange}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const resp = await fetch(`http://localhost:9393/users`)
                const data = await resp.json()
                setUsers(data)
            } catch (error) {
                alert(error)
            }
        }
        fetchData()
    }, []);

    return (
        <Dropdown onSelect={handleChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Select User</Dropdown.Toggle>

            <Dropdown.Menu >
                {users.map(user => <Dropdown.Item eventKey={user.id} key={user.id} user_id={user.id} user={user} >{user.username}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default UserDropdown;