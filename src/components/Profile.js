import { useEffect } from "react";

const Profile = (props) => {

    console.log("random", props)
  useEffect(()=>{
    return (()=> {
      //It will call after component unmounted
    })
  },[])
  return (
    <div>
        <h1>
        {props.name}</h1>
    </div>
  )
}

export default Profile;