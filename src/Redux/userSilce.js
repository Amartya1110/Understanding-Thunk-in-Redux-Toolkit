import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const nameOfSlice = "user"

// Here 'fetchUserData' - is called as a // Here 'fetchUserData' - is called as a "Thunk Action Creator"
export const fetchUserData = createAsyncThunk(
    `${nameOfSlice}/fetchUserData`, async(arg) => {
        try {
            console.log(arg) // O/P:- New User Name
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const fetchedUserList = await response.json()
            console.log(fetchedUserList)
            return fetchedUserList[Math.floor(Math.random()*11)]?.name
        } catch (error) {
            return error?.message
        }
    }
)

/*
=> NOTE:    
1) The async function defined inside the "Thunk Action Creator" - 'fetchUserData'; is not a reducer function.
2) Only fetchUserData.pending, fetchUserData.fulfilled and fetchUserData.rejected - these 3 are the reducer functions.
3) Since the async function is not a reducer fumction, hence it'll not have access to the state of the slice.
4) The async function defined inside the "Thunk Action Creator" - is known as "payloadCreator".
5) The first parameter of the "PayloadCreator" - is the argument that we pass to the "Thunk Action Creator" while dispatching it.
E.g.: dispatch(fetchUserData("New User Name"))
      async(arg)
    =>Here, the value of 'arg' becomes equal to - "New User Name"

*/



/*
    fetchUserData(payload1) ( It is kind of an Asynchronous Action) => The promise returned by the async function, will have 3 states: 'pending', 'fulfilled', 'rejected'
        =>for 'pending' state of the pronmise, we shall write this -> fetchUserData.pending - reducer function
        =>for 'fulfilled' state of the pronmise we shall write this -> fetchUserData.fulfilled - reducer function
        =>for 'rejected' state of the pronmise we shall write this -> fetchUserData.rejected - reducer function


    NOTE: fetchUserData.pending, fetchUserData.fulfilled, fetchUserData.rejected - these are the reducer functions corresponding to the 
          3 states of the promnise returned by the async middleware function
          -> These Reducer function we need to define explicitly and inside the 'extraReducers'-property of the createSlice function

*/


const userSlice = createSlice({
    name: nameOfSlice,
    initialState: {
        userName: "Amartya",
        email:"Amartya@abc.com",
    },
    reducers: {
        "changeUserName": (state, action) => {
            state.userName = action.payload
        },

        "changeEmail": (state, {payload}) => {
            state.email = payload
        }
    },
    extraReducers: {
        [fetchUserData.pending] : (state) => {
            state.userName = "Loading ... "
        },
        [fetchUserData.fulfilled] (state, action) {
            state.userName = action.payload
        },
        [fetchUserData.rejected] (state, action) {
            state.userName = "Could not be fetched"
        }

    }
})

export default userSlice.reducer
export const {changeUserName, changeEmail} = userSlice.actions