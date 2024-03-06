import axios from "axios";

const todos = axios.create({
  baseURL: "http://localhost:4000",
});

export default todos;
