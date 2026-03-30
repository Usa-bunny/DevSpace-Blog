import Head from "next/head";
import Header from "./Header";

export default function Layout({
  title = "Welcome to DevSpace",
  keywords = "development, coding, progamming",
  description = "The best info and news in develop",
  children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="author" content="Usagi" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}
