"use client";
import { Card, CardBody } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "@/libs/graphql/queries";

export default function Home() {
  const { data, loading, error } = useQuery(GET_NOTES);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Halo, dunia!
      <a href="/add-note">Tambah Catatan</a>
      <section>
        {data?.notes.map((note) => (
          <Card key={note.id} className="w-96 mt-4">
            <CardBody>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </CardBody>
          </Card>
        ))}
      </section>
    </main>
  );
}
