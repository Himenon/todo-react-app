import * as z from "zod";

export const AddTodoForm = z.object({
  title: z.string(),
});

export type AddTodoForm = z.infer<typeof AddTodoForm>;
