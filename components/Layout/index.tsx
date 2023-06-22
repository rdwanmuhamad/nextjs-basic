import React, { ReactNode } from "react";
import Header from "../Header/header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>Next JS Basic | {pageTitle}</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}
