import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Api call or asynchronous function using Thunk
// firt arguement is name of slice + / + Name of THunk function
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data)
    console.log("response from thunk");
    console.log(result);
    
    return result
})

const restaurantSlice = createSlice({
    name:'restaurantSlice',
    initialState:{
        loading:false, //pending state that means, API call in progress
        allRestaurant:[],  // resolve stage
        error:''  // rejected state
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload;
            state.empty=''
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading = false
            state.allRestaurant = []
            state.error = action.error.message
        })
    },
    reducers:{
        searchRestaurant:(state,action)=>{
            state.allRestaurant.restaurants = state.searchRestaurant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})
export default restaurantSlice.reducer;
export const {searchRestaurant} = restaurantSlice.actions;





// redux is a synchronous operation but API call or file read or write are asynchronous operations
// To deal with asynchronous operation in redux we are using Redux Thunk
// Thunk is not a part of slice, it is a seperate method in redux toolkit