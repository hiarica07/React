import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({

  name: "yetkiSlice",

  initialState: {
    email: "",
    password: "",
  },

  reducers:{
    createUser:(state,action)=>{   // state , action iki değişken alır. State yukarıda tanımlanan boş değer, action yollanan değer.action type ve payload içerir.

      state.email=action.payload.email
      state.password=action.payload.password

    },

    deleteUser:(state)=>{
      state.email=""
      state.password=""
    }
  }
});

export const {createUser,deleteUser} = yetkiSlice.actions

export default yetkiSlice.reducer
