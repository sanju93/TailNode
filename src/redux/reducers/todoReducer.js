let {createSlice} = require('@reduxjs/toolkit');


let initialState = {
    todos : []
}

let todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        add : (state,action) => {
           state.todos.unshift({text : action.payload,completed : false});
        },
        toggle : (state,action) => {
            let item = state.todos.splice(action.payload,1);
            
            item[0].completed = !item[0].completed;
            state.todos.push(item[0]);
        },
        clearToDo : (state,action) => {
            state.todos = [];
        },
        addAll : (state,action) => {
            state.todos = action.payload;
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;