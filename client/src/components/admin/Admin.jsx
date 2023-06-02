// import './admin.css';
// import React, { useEffect, useState } from 'react';
//
// const Admin = () => {
//     const gifUrl = "https://media.tenor.com/SBtFX371Cx4AAAAd/coffee-now.gif";
//
//
//     return (
//         <div>
//             <div className= "gifWrapper">
//                 <img className= "myGif" src={gifUrl} alt="Гіфка" />
//             </div>
//
//
//         </div>
//
//     );
// };
//
// export default Admin;






// work wersion
//
//
// import React, { useEffect, useState } from 'react';
// import {registration} from "../../actions/user";
//
// const Admin = () => {
//     const [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         fetch('http://localhost:5000/api/auth/login/admin')
//             .then(response => response.json())
//             .then(data => {
//                 setUsers(data);
//                 console.log(users)
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     const gifUrl = "https://media.tenor.com/SBtFX371Cx4AAAAd/coffee-now.gif";
//     const separator = ""
//     return (
//         <div>
//             <div className="gifWrapper">
//                 <img className="myGif" src={gifUrl} alt="Гіфка" />
//             </div>
//
//             <div>
//                 {/* Вывод данных из базы данных */}
//                 {users.map(user => (
//                     <div key={user._id}>
//                         <div className= "userContainer">
//                             <p>{user._id}</p>
//                             <p>{user.email}</p>
//                             <p>{user.department}</p>
//                             <p>{user.departmentCode} </p>
//                             <br/>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="authorization__btn">Видалити дані</button>
//         </div>
//     );
// };
//
// export default Admin;

import React, { useEffect, useState } from 'react';
import {registration} from "../../actions/user";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/auth/login/admin')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(users)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const handleDelete = (userId) => {
        fetch(`http://localhost:5000/api/auth/login/admin`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                const updatedUsers = users.filter(user => user._id !== userId);
                setUsers(updatedUsers);
            })
            .catch(error => {
                console.log(error);
            });
    };


    const gifUrl = "https://media.tenor.com/SBtFX371Cx4AAAAd/coffee-now.gif";
    const separator = ""
    return (
        <div>
            <div className="gifWrapper">
                <img className="myGif" src={gifUrl} alt="Гіфка" />
            </div>

            <div>
                {users.map(user => (
                    <div key={user._id}>
                        <div className= "userContainer">
                            <p>email: {user.email}</p>
                            <p>department: {user.department}</p>
                            <p>departmentCode: {user.departmentCode} </p>
                            <br/>
                        </div>
                    </div>
                ))}
            </div>
            <button className="authorization__btn" onClick={handleDelete}>Видалити дані</button>
        </div>
    );
};

export default Admin;