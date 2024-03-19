import BlogDetails from "@/components/ui/BlogDetails";
import { IBlog } from "@/types/index.types";

interface IBlogDetailsPageProps {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 2).map((blog: IBlog) => ({ blogId: blog.id }));
};

const BlogDetailsPage = async ({ params }: IBlogDetailsPageProps) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogDetailsPage;
