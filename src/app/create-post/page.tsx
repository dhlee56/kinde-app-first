import { handleCreatePost } from "./actions";

export default function CreatePost() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create a New Post</h1>
      <form action={handleCreatePost} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-left mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-left mb-2 font-medium">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter post body"
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}