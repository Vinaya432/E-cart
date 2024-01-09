import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchProducts = createAsyncThunk('allproducts/fetchproducts',async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    localStorage.setItem("products",JSON.stringify(response.data.products)) //to strore data permenantly
    return response.data.products
    // return axios.get('https://dummyjson.com/products').then(res=>res.data.products)
})
const productSlice= createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        productContainer:[],
        loading:false,
        error:"",
        //pagination
        productsPerPage:10,
        currentPage:1
    },
    reducers:{
        productSearch:(state,action)=>{
            state.products = state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        },
        //action for pagination
        onNavigateNext:(state)=>{
            state.currentPage++
        },
        onNavigatePrevious:(state)=>{
            state.currentPage--
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.productContainer=action.payload
        })

        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false
            state.products=[]
            state.error="API call failed"
        })
    }
})

export const {productSearch,onNavigateNext,onNavigatePrevious}= productSlice.actions
export default productSlice.reducer