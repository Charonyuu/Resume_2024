"use client";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { getPageTitle } from "notion-utils";
import Head from "next/head";

export default function NotionPage({
  recordMap,
  rootPageId,
}: {
  recordMap: any;
  rootPageId: string;
}) {
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

  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  console.log(title, recordMap);
  const MyLink = ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link href={"Blog" + href}>
      <a {...props}>{children}</a>
    </Link>
  );
  return (
    <>
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
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return <Link href={`/Blog/${props.href}`}>{props.children}</Link>;
          },
          Code,
          Collection,
          Equation,
          Modal,
          // nextImage: Image,
        }}
      />
    </>
  );
}
