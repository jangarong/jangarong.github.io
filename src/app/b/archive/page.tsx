import { formatDate } from "@/lib/blog"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata = {
  title: 'Jan Garong [B] - Theta Archive',
}

const posts = [
    {
    publishedAt: "2025-07-13",
    title: "theta∞",
    thetaFile: "theta∞.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta0",
    thetaFile: "theta0.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta1",
    thetaFile: "theta1.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta2",
    thetaFile: "theta2.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta3",
    thetaFile: "theta3.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta4",
    thetaFile: "theta4.tar"
  },
  {
    publishedAt: "2025-07-12",
    title: "theta5",
    thetaFile: "theta5.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta6",
    thetaFile: "theta6.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta7",
    thetaFile: "theta7.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta8",
    thetaFile: "theta8.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta9",
    thetaFile: "theta9.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta10",
    thetaFile: "theta10.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta11",
    thetaFile: "theta11.tar"
  },
    {
    publishedAt: "2025-07-12",
    title: "theta12",
    thetaFile: "theta12.tar"
  },
      {
    publishedAt: "2025-07-12",
    title: "theta13",
    thetaFile: "theta13.tar"
  },
      {
    publishedAt: "2025-07-12",
    title: "theta14",
    thetaFile: "theta14.tar"
  },
  {
    publishedAt: "2025-07-12",
    title: "theta15",
    thetaFile: "theta15.tar"
  },
]

const baseUrl = ""

function ArchivePosts() {
  if (!process.env.IS_CORP_ENV) {
    return notFound();
  }
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.publishedAt) > new Date(b.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.title}
            className="flex flex-col space-y-1 mb-4"
            href={baseUrl + `/assets/b/theta/${post.thetaFile}`}
            target="_blank"
          >
            <div className="ml-[32px] w-[100%] flex flex-row space-x-0 space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-[100vh] mt-[48px] mx-[24px] mb-[72px]">
      <h1 className="font-semibold text-2xl tracking-tighter mb-4">What&apos;s Old</h1>
      <p className=" mb-8">Here is the entire J13 collection: <Link href="/b/archive/j13/index.html" target="_blank">Click here.</Link></p>

      <p className=" mb-8">This is a collection of posts from my old blog, JanCo. Blog. This was previously hosted on Ghost, and was preserved using singlefile.html.</p>
      <ArchivePosts />
    </div>
  )
}
