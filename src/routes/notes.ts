import { publicProcedure, router } from '../trpc';

const getNotes = publicProcedure.query(() => {
  return [
    {
      id: 1,
      title: 'No Content'
    }
  ];
});

export const notesRouter = router({
  get: getNotes
});
