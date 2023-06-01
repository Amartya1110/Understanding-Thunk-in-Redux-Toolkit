import { useDispatch } from "react-redux"
import { changeEmail, changeUserName, fetchUserData } from "../Redux/userSilce"
import { useState } from "react"

const ChangeButtons = () => {
    const dispatch = useDispatch()
    // const [userList, setUserList] = useState([])
    
    // ==== 1st Try ======
    // const changeNameHandler = () => {
    //     dispatch(changeUserName("New User Name"))
    // }


    // ==== 2nd Try ======
    // const changeNameHandler = async() => {
    //     try {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const fetchedUserList = await response.json()
    //         console.log(fetchedUserList)
    //         setUserList(fetchedUserList)
    //         if(userList.length >= 10) {
    //             dispatch(changeUserName(userList[Math.floor(Math.random()*11)]?.name))
    //         }

    //         // setTimeout(async() => {
    //         //     const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //         //     const fetchedUserList = await response.json()
    //         //     console.log(fetchedUserList)
    //         //     setUserList(fetchedUserList)
    //         //     // dispatch(changeUserName(userList[Math.floor(Math.random()*11)]?.name))
    //         // },5000)
    //         // dispatch(changeUserName(userList[Math.floor(Math.random()*11)]?.name))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    const changeNameHandler = () => {
        // Here 'fetchUserData' - is called as a "Thunk Action Creator"
        dispatch(fetchUserData("New User Name"))
    }


    const changeEmailHandler = () => {
        dispatch(changeEmail("New Email"))
    }

    return(
        <div>
            <button onClick={() => {changeNameHandler()}}>Change Name</button>
            <button onClick={() => {changeEmailHandler()}}>Change Email</button>
        </div>
    )
}

export default ChangeButtons