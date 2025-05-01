import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();
  const posts = data.posts;

  return (
    <main className="flex flex-col items-center justify-center text-center px-5 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <ul className="text-center">
        {posts.map((post: any) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`} className="hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
