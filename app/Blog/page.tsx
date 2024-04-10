import { BlogCardType, BlogCards } from "../_data/blog";

export default async function Blog(context: any) {
  return (
    <>
      <span className="flex items-center max-w-6xl mx-auto w-full px-4 text-center">
        <span className="h-px flex-1 bg-gray-300"></span>
        <h2 className="mx-4 text-4xl font-semibold w-fit my-4">
          My Notion Note Blog
        </h2>
        <span className="h-px flex-1 bg-gray-300"></span>
      </span>

      <div className="max-w-6xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 gap-4 lg:grid-cols-4 lg:gap-8">
        {BlogCards.map((blog: BlogCardType) => (
          <article
            key={blog.postId}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            <a href={`/Blog/${blog.postId}`}>
              <img
                alt={blog.title}
                src={blog.image}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm/relaxed text-gray-500 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="mt-4 flex flex-wrap gap-1">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
