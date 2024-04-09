import NotionPage from "@/components/blog/NotionPage";
import notion from "@/lib/notion";
import Link from "next/link";

type BlogCardType = {
  title: string;
  timeStamp: string;
  postId: string;
  image: string;
  tags: string[];
};

const BlogCards: BlogCardType[] = [
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
  {
    title: "JavaScript",
    timeStamp: "2022-10-10",
    postId: "4cb943f3e2c04978861a2db5c82c7ee3",
    image: "",
    tags: ["JavaScript"],
  },
];

export default async function Blog(context: any) {
  return (
    <div className="">
      {BlogCards.map((blog: BlogCardType) => (
        <a href={`/Blog/${blog.postId}`} key={blog.postId}>
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {blog.timeStamp}
              </time>

              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                {blog.title}
              </h3>

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
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
