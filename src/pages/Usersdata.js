import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () =>
{
    let API = "https://dummyjson.com/users?limit=15";
    const fetchApiData = async (url) => {
        try{
            const res = await axios.get(url);
            setUsers(res.data.users);         

        }catch(error){
            console.log(error);
        }
    }

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetchApiData(API);
    }, [])
    
    return (
        <>
        <div className="md:w-4/5 w-11/12 mx-auto my-6 md:my-16">
        <div className="w-full py-5 mx-auto"> 
        <h1 className="flex justify-center text-white text-6xl my-4">Users Data</h1>
        <div className="flex flex-wrap justify-center w-full gap-8">      
        {users &&
            users.map((user) =>{
                // const {id, name, email} = curUser;
                console.log(user);
                return (
                    <div className="p-4 lg:w-1/4 md:w-1/2 ai-gradient bg-slate-800 rounded-lg max-w-xs scale-in-center" key={user.id}>
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 bg-white bg-opacity-10 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={user.image}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-bold text-lg text-white">
                        {`${user.firstName} ${user.lastName}`}
                      </h2>
                      <h3 className="text-yellow-500 font-medium mb-3">{`${user.company.department}`}</h3>
                      <p className="mb-4">
                        {`Works in:- ${user.company.name}  with
                        title:- ${user.company.title} and
                        Graduated from:- ${user.university}`}
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-300">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-300">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-300">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                );
            })
        }
        </div>
        </div>
        </div>
        </>

    )
}

export default Users;