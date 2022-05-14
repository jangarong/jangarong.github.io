import Head from "next/head";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="pattern-grid-lg" id="bg">
      <Head>
        <title>Welcome to JanCo.</title>
        <meta name="description" content="Welcome to my portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="layout">{children}</main>
    </div>
  )
}
