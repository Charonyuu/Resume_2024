import NotionPage from "@/components/blog/NotionPage";
import notion from "@/lib/notion";
import React from "react";

export default async function NotePage(context: any) {
  const pageId = context.params.pageId as string;
  const recordMap = await notion.getPage(pageId);
  return <NotionPage recordMap={recordMap} rootPageId={pageId} />;
}
