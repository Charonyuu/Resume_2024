import { BlogCards, BlogType, SingleCardType } from "../_data/blog";

export default async function Blog(context: any) {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">Blog</h2>
        <div className="w-10 h-0.5 bg-teal-500 mb-8" />

        {BlogCards.map((blogCard: BlogType) => (
          <div key={blogCard.title} id={blogCard.category} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-700" />
              <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                {blogCard.title}
              </h4>
              <div className="h-px flex-1 bg-gray-700" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogCard.value.map((blog: SingleCardType) => (
                <a
                  key={blog.postId}
                  href={`/Blog/${blog.postId}`}
                  className="group rounded-xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-teal-500/30 transition-all duration-300"
                >
                  <img
                    alt={blog.title}
                    src={blog.image}
                    className="h-44 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1.5">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {blog.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-teal-400 font-medium mt-3 group-hover:gap-2 transition-all">
                      Read more
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
