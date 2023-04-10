import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getStocks = createAsyncThunk<Stock[], any, {rejectValue: string}>("stocksSlice/getStocks", 
   async (_,{rejectWithValue}) => {

      try {

         const token = process.env.REACT_APP_API_KEY
         const response = await fetch(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${token}&listLimit=1000&displayPercent=true`)
         let result = await response.json() 
         
         return result
           
      } 
      catch (error) { 
         return rejectWithValue('Server Error(')
      }
   }
)

export type Stock = {
   companyName: string
   change: number
   changePercent: number
   latestPrice: number
   latestTime: string
   symbol: string
   currency: string
}

type State = {
   stocks: Stock[] | null
   isLoading: boolean
   error: string | null
}

const initialState: State = {
   stocks: null,
   isLoading: false,
   error: null,
}

export const stocksSlice = createSlice({
   name: 'stocksSlice',
   initialState,

   reducers: {
      setStocks: (state, action: PayloadAction<Stock[]>) => {
         state.stocks = action.payload  
      }
   },

   extraReducers: (builder) => {
      builder.addCase(getStocks.pending, (state) => {
         state.isLoading = true
         state.error = null
      })

      builder.addCase(getStocks.fulfilled, (state, action) => {
         state.isLoading = false
         state.stocks = action.payload
      })

      builder.addCase(getStocks.rejected, (state, action) => {
         state.isLoading = false
         if(action.payload) {
            state.error = action.payload
         }
      })
   }
})

export const stocksSelector = (state: RootState) => state.stocksSlice

export const { setStocks } = stocksSlice.actions

export default stocksSlice.reducer