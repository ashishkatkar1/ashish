import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Search() {
    const[pollutionFilter,setPollutionFilter]=useState('')
    const[search,setSearch]=useState('')
    const[data1,setData]=useState([])

    useEffect(()=>{
          if(pollutionFilter==='city'){
              const url = `https://dummyjson.com/products/${search}`
              const fetchApi=async()=>{
                let response = await fetch(`${url}`)
                let data = await response.json();
                console.log(data);
                setData([data])
            }
            fetchApi();   
          }else if(pollutionFilter==='country'){
              const url = `http://localhost:3000/comments`
              const fetchApi=async()=>{
                let response = await fetch(`${url}`)
                let data = await response.json();
                setData([data])
            }
            fetchApi();    
          }else if(pollutionFilter==='state'){
              const url = `http://localhost:3000/profile`
              const fetchApi=async()=>{
                let response = await fetch(`${url}`)
                let data = await response.json();
                setData(data)
            }
            fetchApi();  
          }else{
              console.log('no data found');
          }
          
    },[search])


    

    const dropdownChangeHandler=(event)=>{
        setPollutionFilter(event.target.value)
    }
    const SearchHandler=(event)=>{
        setSearch(event.target.value)
    }
    return (
        <div><label>Find By:</label><br />
        <select onChange={dropdownChangeHandler}>
         <option selected disabled></option>
          <option value='city'>City</option>
          <option value='state'>State</option>
          <option value='country'>Country</option>
        </select>
        <label htmlFor="Search">Search</label>
        <input type="text" onChange={SearchHandler} />
        <ul>
          {data1.map(user => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
        </div>
        
    )
}

export default Search
