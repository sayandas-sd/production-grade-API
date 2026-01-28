import {router, publicProcedure} from "../../trpc";
import {z} from "zod";
import { getData, modelSchema, Todo } from "./models";


const todos: Todo[] = [{
    id: '1', 
    title: "creating a course",
    contenet: "course content is web3 and ai",
    isCompleted: false
}]

export const todoRouter = router({
    createTodos: publicProcedure
    .meta({ openapi: {
        method: 'POST',
        path: '/create',
        tags: ['todos'],
        description: 'create todos'
    }})
    .input(z.object({ title: z.string()}))
    .output(z.object({ todos: modelSchema}))
    .mutation(({input}) => {
        todos.push({ id: '1', title: input.title, isCompleted: true})
        return {
            todos: {id: '1', title: input.title, isCompleted: true}
        }
    }),

    getAllTodos: publicProcedure
    .meta({ openapi: { 
        method: 'GET', 
        path: '/todos',
        tags: ['todos'],
        description: 'returns all data',
    }})
    .input(z.undefined())
    .output(getData)
    .query(() => {
        return {
            todos: todos
        }
    })
})