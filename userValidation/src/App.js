import React,{useState} from 'react';
import User from './components/Users/User'
import UserList from './components/Users/UserList';

function App() {
  const [userlist, setUserlist]=useState([])
  const addUserHandler=(uName,uage)=>{
    setUserlist(values=>{
      return [...values,{name:uName, age:uage}]
    })

  }
  return (
    <div>
      <User onAddUser={addUserHandler}/>
      <UserList users={userlist}/>
    </div>
  );
}

export default App;
