import { useQuery } from "@apollo/client";
import { GET_NOTES } from "@/libs/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {data.notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
