import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("haberSlice/getData",
  
  
  async()=>{

  const res = await axios("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb");

  return res.data.articles;

  }

)

export const haberSlice=createSlice({
  name:"haberSlice",
  initialState:{
    haberler:[],
    loading:true
  },



  reducers:{
    clear:(state,action)=>{
      state.haberler=state.haberler.filter((a)=>a.url!==action.payload);
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading=true
      })
      .addCase(getData.fulfilled, (state, action) => {

        state.haberler=action.payload
        state.loading=false

      });
  },
})


export const {clear} = haberSlice.actions;  // fonksiyonlar out

export default haberSlice.reducer // tüm sayfa out