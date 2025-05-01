import { useRouter } from "next/router";

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </main>
  );
}