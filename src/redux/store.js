import { todoReducer } from './reducers/todoReducer';
let {configureStore} = require('@reduxjs/toolkit');


export const store = configureStore({
    reducer : {
        todoReducer
    }
})


