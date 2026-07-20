function Blog() {
  const blogs = [
    {
      id: 1,
      title: "5 Tips for Dog Health",
    },
    {
      id: 2,
      title: "Best Foods for Puppies",
    },
    {
      id: 3,
      title: "How to Train Your Dog",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {blog.title}
            </h2>

            <p className="text-gray-600 mt-2">
              Read expert tips and advice for dog owners.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;