import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("getData" , async()=>{
    try {
     
     const data = await fetch("https://66c64156134eb8f43497337e.mockapi.io/api/v1/data");
     const users = await data.json();
     console.log(" data:  " , users);
     return users;
    } catch (error) {
     console.log("data fetching error: " , error);
     
    }
 })


 ////////////////
 export const addData = createAsyncThunk("addData" , async(data)=>{
    console.log("data ala : " , data);
     const userdata = await fetch("https://66c64156134eb8f43497337e.mockapi.io/api/v1/data" , {
         method : "POST",
         headers :{
          "Content-Type" : "application/json"
         },
         body : JSON.stringify(data)
 
     });
 
 
     try {
        const result =await userdata.json();
        return result; 
 
     } catch (error) {
         console.log("error : " , error);
     }
 })
 

export const transactionSlice = createSlice({
    name : "hostelBoys",
    
    initialState : {
        loading : false,
        error : false,
        total  : 0 ,
        allTransications : [],
        reamingAmount : 0 ,
        oldAmount : 0 
    },

    extraReducers : (builder) =>{
          //All Users
        builder.addCase(getData.pending , (state)=>{
            state.loading = true;
        })

        builder.addCase(getData.rejected , (state) =>{
            state.error = true;
        })
        builder.addCase(getData.fulfilled , (state , action)=>{
            state.loading = false;
              state.allTransications = action.payload;
            state.error = false;
        })

        //

        builder.addCase(addData.pending , (state)=>{
            state.loading = true;
            })
            builder.addCase(addData.fulfilled , (state , action)=>{
             state.allTransications.push(action.payload);
             
            })
            builder.addCase(addData.rejected , (state)=>{
                state.error = true;
            })
        
    }

 
})


// export const {} = transactionSlice.actions;
export default transactionSlice.reducer;