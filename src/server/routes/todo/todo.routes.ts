import {router, publicProcedure} from "../../trpc";
import {z} from "zod";
import { getData, Todo } from "./models";


const todos: Todo[] = [{
    id: '1', 
    title: "creating a course",
    contenet: "course content is web3 and ai",
    isCompleted: false
}]

export const todoRouter = router({
    getAllTodos: publicProcedure
    .input(z.undefined())
    .output(getData)
    .query(() => {
        return {
            todos: todos
        }
    })
})