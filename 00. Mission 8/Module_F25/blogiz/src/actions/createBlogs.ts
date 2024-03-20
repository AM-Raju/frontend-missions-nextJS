"use server";
import { IBlog } from "@/types/index.types";

export const createBlog = async (data: IBlog) => {
  return await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
};
