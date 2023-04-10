import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getLogo = createAsyncThunk<Logo, string, {rejectValue: string}>("logoSlice/getLogo", 
   async (symbol, {rejectWithValue}) => {

      try {

         const token = process.env.REACT_APP_API_KEY
         const response = await fetch(`https://cloud.iexapis.com/stable/stock/${symbol}/logo?token=${token}`)
         let result = await response.json()
      
         return {[`${symbol}`]: result.url}
           
      } 
      catch (error) { 
         return rejectWithValue('Server Error(')
      }
   }
)

export type Logo = Record<string, string>

type State = {
   logos: Logo
   isLogosLoading: boolean
   logosError: string | null
}

const initialState: State = {
   logos: {},
   isLogosLoading: false,
   logosError: null,
}

export const logoSlice = createSlice({
   name: 'logoSlice',
   initialState,

   reducers: {

   },

   extraReducers: (builder) => {
      builder.addCase(getLogo.pending, (state) => {
         state.isLogosLoading = true
         state.logosError = null
      })

      builder.addCase(getLogo.fulfilled, (state, action) => {
         state.isLogosLoading = false
         state.logos = {...state.logos, ...action.payload}
      })

      builder.addCase(getLogo.rejected, (state, action) => {
         state.isLogosLoading = false
         if(action.payload) {
            state.logosError = action.payload
         }
      })
   }
})

export const logoSelector = (state: RootState) => state.logoSlice

export default logoSlice.reducer