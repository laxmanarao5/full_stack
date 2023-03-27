import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin=createAsyncThunk("user/login",async(userCredObj,{rejectWithValue})=>{
    try{
        let res=await axios.post("http://localhost:4000/user-api/login",userCredObj)
        console.log(res);
        if(res.data.message=="success")
        {
            sessionStorage.setItem("token",res.data.token)
            //localStorage.setItem("token",res.data.token)
            return res.data    
        }
        else
        {
            throw new Error(res.data.message) 
        }
        
        
    }
    catch(err){
        console.log("Error",err);
        return rejectWithValue(err)
    }
    
    
})

export const userSlice=createSlice({
    name:"user",
    initialState:{
        userObj:{},
        loginStatus:false,
        errorMessage:" ",
        status:"idle"
    },
    reducers:{
        clearState : (state,action)=>{
            state.userObj={}
            state.loginStatus=false
            state.errorMessage=" "
            state.status="idle"
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(userLogin.pending,(state,action)=>{
                state.status="pending"

        })
        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.userObj=action.payload.user
            state.loginStatus=true
            state.status="success"
            state.errorMessage=""

        })
        builder.addCase(userLogin.rejected,(state,action)=>{
            state.loginStatus=false
            console.log(action.payload);
            state.status="failed"
            state.errorMessage=action.payload.message
        })
    }
})



//export actions
export const {clearState}=userSlice.actions

//export userSlice
export default userSlice.reducer