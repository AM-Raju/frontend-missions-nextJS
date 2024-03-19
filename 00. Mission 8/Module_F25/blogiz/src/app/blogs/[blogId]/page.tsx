import BlogDetails from "@/components/ui/BlogDetails";

interface IBlogDetailsPageProps {
  params: {
    blogId: string;
  };
}

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
