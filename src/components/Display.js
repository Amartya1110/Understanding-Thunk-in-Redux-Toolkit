import { useSelector } from "react-redux"

const Display = () => {
    const user = useSelector(store => store?.user)
    return(
        <div>
            <h1>Name of the user is: {user?.userName}</h1>
            <h1>Email of the user is: {user?.email}</h1>
        </div>
    )
}

export default Display