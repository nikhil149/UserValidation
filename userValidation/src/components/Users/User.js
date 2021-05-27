import Card from '../UI/Card'
import classes from './User.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const User = (props) => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState('')

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        if(username.trim().length === 0){
            setError({
                title: "Empty Fields",
                message: "Username or Age Can't be Empty"
            })
            return
        }
        if(+age <1){
            setError({
                title: "Age Error",
                message: "Age Can't be 0 or Negative"
            })
            return
        }
        props.onAddUser(username,age)
        setUsername('')
        setAge('')
    }
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <lable htmlFor="username">Name</lable>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler}></input>
                    <lable htmlFor="age">Age</lable>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add USer</Button>
                </form>
            </Card>
        </div>
    )
}

export default User