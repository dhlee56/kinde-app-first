"use server";

export async function handleCreatePost(formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");

  console.log("Form Data:", { title, body });

  // You can add additional logic here, such as saving the data to a database.
}