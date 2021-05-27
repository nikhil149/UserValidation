import React,{useState, Fragment} from 'react';
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
    <Fragment>
      <User onAddUser={addUserHandler}/>
      <UserList users={userlist}/>
    </Fragment>
  );
}

export default App;
