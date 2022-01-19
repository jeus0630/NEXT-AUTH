import {signIn, getSession} from "next-auth/react";
import {useEffect} from 'react';
const Dashboard = () => {
    useEffect(async ()=>{
        const session = await getSession();
        if(!session){
            signIn();
        }
    },[]);

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;