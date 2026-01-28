import { router } from './trpc';
import { todoRouter } from './routes/todo/todo.routes';

export const appRouter = router({
  todos: todoRouter
});

export type AppRouter = typeof appRouter;