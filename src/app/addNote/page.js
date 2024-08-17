"use client";

import { useMutation } from "@apollo/client";
import { CREATE_NOTE } from "@/libs/graphql/mutations";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Add() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createNote] = useMutation(CREATE_NOTE);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNote({
        variables: {
          title,
          body,
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Note</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Body
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}
