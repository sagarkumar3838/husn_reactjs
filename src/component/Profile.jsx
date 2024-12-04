import React, { useState } from 'react'

const Profile = () => {
    const [profile , setprofile] = useState({
        name : "",
        age : "",
    })

    const changeHandler = (e) =>{
        const {name , value} = e.target;

        setprofile((prevProfile)=>({...prevProfile , [name]: value}))
    }
  return (

    <div>
      <h2>User Profile</h2>
      <div>
          <label>Name:
            <input type="text" name="name" id="" value={profile.name} onChange={changeHandler} />
          </label>
      </div>

      <div>
          <label>Age:
            <input type="text" name="age" id="" value={profile.age} onChange={changeHandler} />
          </label>
      </div>

      <h3>profile information</h3>

      <p>Name: {profile.name}</p>
      <p>Age : {profile.age}</p>

    </div>
  )
}

export default Profile
