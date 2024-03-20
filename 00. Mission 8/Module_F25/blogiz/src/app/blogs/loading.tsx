import LoadingCard from "@/components/ui/LoadingCard";
import { IBlog } from "@/types/index.types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div>
      <div>
        {blogs.map((blog: IBlog) => (
          <LoadingCard key={blog.id}></LoadingCard>
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
