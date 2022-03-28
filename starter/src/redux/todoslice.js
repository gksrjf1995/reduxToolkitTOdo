import { createSlice  , createAsyncThunk, isFulfilled} from "@reduxjs/toolkit";

export const getTodoAsync =  createAsyncThunk(
    'todos/getTodoAsync',
    async () => {
        const response = await fetch("http://localhost:7000/todos");
        if(response.ok){
            const todos = await response.json();
            return {todos}
        }
    }
);

const initialState = [
    {
        id: 1 , title : "todo1" , completed : false,
    },
    {
        id: 2 , title : "todo2" , completed : false,
    },
    {
        id: 3 , title : "todo3" , completed : true,
    },
]

const todoSlice = createSlice({
    name: "todos",
    initialState, 
    reducers : {
        addTodo : (state,action)=>{
           const newtodos = {
               id : Date.now(),
               title : action.payload.title,
               complated : false,
           };
           state.push(newtodos);
        },
        deleteTodo : (state,action)=>{
           const result = action.payload.id;
           return  state.filter((item)=>item.id !== result);
        },
        completedTodo : (state, action) => {
            const index = action.payload.id 
           
            const findary = state.findIndex((item)=>{
                return item.id === index
            });
            console.log(findary);
            state[findary].completed = action.payload.completed
        }
    },
    extraReducers : {
        [getTodoAsync.fulfilled] : (state,action) => {
            return action.payload.todos;
        },
    },
});

export const { addTodo , deleteTodo , completedTodo } = todoSlice.actions;

export default todoSlice.reducer;