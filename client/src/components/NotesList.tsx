import { trpc } from '../trpc';

const NotesList = () => {
  const { data } = trpc.note.get.useQuery();

  return <>{JSON.stringify(data)}</>;
};

export default NotesList;
