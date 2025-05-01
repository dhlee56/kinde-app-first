import { notFound } from "next/navigation";

export default async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  
  if (!res.ok) {
    return notFound();
  }

  const post = await res.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </main>
  );
}