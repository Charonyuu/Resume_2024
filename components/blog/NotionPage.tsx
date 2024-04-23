"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import dynamic from "next/dynamic";
import Link from "next/link";

type NotionPageProps = {
  readonly recordMap: any;
  readonly rootPageId: string;
};

export default function NotionPage({ recordMap, rootPageId }: NotionPageProps) {
  const Code = dynamic(() =>
    import("react-notion-x/build/third-party/code").then((m) => m.Code)
  );
  const Collection = dynamic(() =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    )
  );
  const Equation = dynamic(() =>
    import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
  );
  const Modal = dynamic(
    () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
    {
      ssr: false,
    }
  );

  const BlogLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return <Link href={`/Blog/${href}`}>{children}</Link>;
  };

  if (!recordMap) {
    return null;
  }

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      rootPageId={rootPageId}
      // previewImages={previewImagesEnabled}
      components={{
        PageLink: (props: {
          href: any;
          children:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactPortal
            | null
            | undefined;
        }) => {
          return <BlogLink {...props} />;
        },
        Code,
        Collection,
        Equation,
        Modal,
        // nextImage: Image,
      }}
    />
  );
}
