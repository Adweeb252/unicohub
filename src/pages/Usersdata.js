import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Teams from "../users/UserCards";

const Users = () =>
{
    // const [records, setRecords] = useState([]);
    // useEffect(()=> {
    //     fetch('https://dummyjson.com/users?limit=20')
    //     .then(response => response.json)
    //     .then((data)=>{
    //     setRecords(data);
    //     console.log(data);
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <>
        <Teams/>
        </>
    )
}

export default Users;