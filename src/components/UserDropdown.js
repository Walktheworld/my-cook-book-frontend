import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

const UserDropdown= () => {
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

    // const findUserId= (id)=>{
    //     const filterUser =users.filter(user => user.id !== id)
    //     foundUser(filterUser)
    // }
    return (
        <Dropdown users={users}  >
            <Dropdown.Toggle variant="success" id="dropdown-basic">Select User</Dropdown.Toggle>

            <Dropdown.Menu>
                {users.map(user => <Dropdown.Item  key={user.id} user={user} >{user.username}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default UserDropdown;