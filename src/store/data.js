import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name : "hostelBoys",
    
    initialState : {
        total  : 10 ,
        transications : [],
        reamingAmount : 0 ,
        oldAmount : 0 
    },
    

 
})


// export const {} = transactionSlice.actions;
export default transactionSlice.reducer;