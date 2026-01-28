import {router, publicProcedure} from "../../trpc";
import {z} from "zod";


export const todoRouter = router({
    getAllTodos: publicProcedure
    .input(z.undefined())
    .output()
    .query(() => {

    })
})