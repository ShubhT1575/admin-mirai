import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wallet: {
        walletAddress: "",
        chainId: null,
        isConnected: false,
        isDisconnected:true,
        status: "",
      },
    dashboardData:{

    },
    tokenData:{

    }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWalletDetails: (state, action) => {
        state.wallet = action.payload;
      },
      setDashboardData: (state, action) => {
        state.dashboardData = action.payload;
      },
      setTokenData: (state, action) => {
        state.tokenData = action.payload;
      },
  },
})

export const {  setWalletDetails,setDashboardData, setTokenData } = counterSlice.actions

export default counterSlice.reducer