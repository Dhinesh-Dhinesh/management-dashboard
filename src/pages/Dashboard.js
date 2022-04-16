import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function Register() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        sendRequest().then(data => {
            if (data.success) {
                setUser(data.user);
            }
        }).catch(err => window.location.href = '/login');
    }, []);

    const sendRequest = async () => {
        const res = await axios.get('http://localhost:4000/api/user', {
            withCredentials: true,
        }).catch(err => console.log(err));

        const data = await res.data;
        return data;
    }

    const sendLogOutRequest = async () => {
        const res = await axios.get('http://localhost:4000/api/logout', {
            withCredentials: true,
        }).catch(err => console.log(err));

        const data = await res.data;
        console.log(data);
        return data;
    }

    const logOut = () => {
        sendLogOutRequest().then(data => {
            if (data.success) {
                window.location.href = '/login';
            }
        });
    }

    return (
        <>
        <div className='container_dashboard'>
            {
                user &&
                <>
                    <div className='center_box'>
                        <div id='detail'>
                            <div>
                                <h1 className='center title'>Dashboard</h1>
                            </div>
                            <h1>UserName : {user.name}</h1>
                            <h1>Email : {user.email}</h1>
                            <h1>Hashed Password : {user.password}</h1>
                            <h1>Account Created At (GMT) : {user.createdAt}</h1>
                            <hr></hr>
                            <h1>You can see Access Token in cookies</h1>
                            <div className='center dsh-btn-fix'>
                                <button className='dsh-btn' onClick={logOut}>Logout</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
        </>
    )
}