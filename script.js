import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
    try{
        const res = await axios.get(`${API_URL}`, {
            params: {
                _limit: 5,
            }
        });
        res.data.forEach(todo => {
            console.log(`ID: ${todo.id}, Title: ${todo.title}`);
        });
    }catch(err){
        console.log(err);
    }
}

getTodos();

async function postTodo() {
    try{
        const res = await axios.post(API_URL,
            { title: "Learn Axios", completed: false, userId: 1}
        );
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

postTodo();

async function putTodo() {
    try{
        const res = await axios.put(`${API_URL}/1`,{ completed: true } );
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

putTodo();

async function deleteTodo() {
    try{
        const res = await axios.delete(`${API_URL}/1`);
        console.log("status:", res.status);
    }catch(err){
        console.log(err);
    }
}

deleteTodo();



