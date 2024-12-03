import React, { useState } from 'react'


function Friend() {

    const [friends , setFriends] = useState(["alex" , "rahul" , "raja"])

const AddFriend = () => setFriends([...friends, "husn"]);

const RemoveFriend = () => setFriends(friends.filter((f) => f !== "rahul"))

const updateFriend = () => setFriends(friends.map(f => f === "alex" ? "alex smith" : f))

  return (
    <div>
      {friends.map((f)=>{
        <li key={Math.random()}></li>
      })}

      <button onClick={AddFriend}>Add Friend</button>
      <button onClick={RemoveFriend}>Remove Friend</button>
      <button onClick={updateFriend}>update</button>
    </div>
  )
}

export default Friend
