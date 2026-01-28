import {z} from "zod";

export const modelSchema = z.object({
    id: z.string().describe("id of the todo"),
    title: z.string().describe("title of the todo"),
    contenet: z.string().optional().describe("store all content"),
    isCompleted: z.boolean().optional().default(false).describe("complete or not")
})

export type Todo = z.infer<typeof modelSchema>


export const getData = z.object({
    todos: z.array(modelSchema)
})

