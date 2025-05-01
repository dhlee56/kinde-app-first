"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1, // Example user ID
      }),
    });

    if (res.ok) {
      router.push("/posts"); // Redirect to the posts page after successful creation
    } else {
      alert("Failed to create post");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="title" className="block text-left font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter the title of your post"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-left font-medium mb-1">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={5}
            placeholder="Write the content of your post here"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}