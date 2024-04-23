import { BlogCards, BlogType, SingleCardType } from "../_data/blog";

export default async function Blog(context: any) {
  return (
    <>
      <h2 className="mx-auto text-4xl font-semibold w-fit my-4">
        My Notion Note Blog
      </h2>
      {/* <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <h5>Category</h5>
        {BlogCards.map((blogCard: BlogType) => (
          <a
            key={blogCard.title}
            href={`#${blogCard.category}`}
            className="block text-sm text-gray-500 hover:text-teal-500"
          >
            {blogCard.category}
          </a>
        ))}
      </div> */}

      {BlogCards.map((blogCard: BlogType) => (
        <div key={blogCard.title} id={blogCard.category} className="my-4">
          <span className="flex items-center max-w-6xl mx-auto w-full px-8 text-center">
            <span className="h-px flex-1 bg-gray-300"></span>
            <h4 className="mx-6 font-semibold">{blogCard.title}</h4>
            <span className="h-px flex-1 bg-gray-300"></span>
          </span>
          <div className="max-w-6xl px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8 gap-4 lg:grid-cols-4 lg:gap-8">
            {blogCard.value.map((blog: SingleCardType) => (
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
                  <div className="p-4 sm:p-4">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
                      {blog.title}
                    </h3>

                    <p className="mt-2 text-sm/relaxed text-gray-500 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <div className="mt-4 flex flex-wrap gap-1">
                    {blog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                      <div />
                      <a
                        href="#"
                        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                      >
                        <span>Find out more</span>
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
        </div>
      ))}
    </>
  );
}
