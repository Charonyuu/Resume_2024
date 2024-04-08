import NotionPage from "@/components/blog/NotionPage";
import notion from "@/lib/notion";

export default async function Home() {
  const pageId = "4cb943f3e2c04978861a2db5c82c7ee3";
  const recordMap = await notion.getPage(pageId);

  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
