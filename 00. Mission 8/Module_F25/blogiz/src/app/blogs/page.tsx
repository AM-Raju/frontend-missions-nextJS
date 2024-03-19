import BlogCard from "@/components/ui/BlogCard";
import { IBlog } from "@/types/index.types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold mt-10 mb-5">
        All Blogs From <span className="text-accent">Blogiz</span>{" "}
      </h1>
      <p className="text-gray-400 text-center w-1/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 w-[70%] mx-auto my-5">
        {blogs.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
