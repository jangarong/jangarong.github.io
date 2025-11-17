import Link from 'next/link'
import { formatDate, getBlogPostsWithExternalMetadata } from '@/lib/blog'

export function BlogPosts() {
  const allBlogs = getBlogPostsWithExternalMetadata()

  return (
    <div>
      {process.env.RESTRICTED_MODE === 'true' ? <div className="mb-[24px] text-sm font-bold">* = Restricted Content</div> : null}
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="ml-[32px] w-[100%] flex flex-row space-x-0 space-x-2">
              <p className="text-neutral-600 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex flex-col w-[100%]">
                <Link
                  href={`/b/log/${post.slug}`}
                  className={"text-neutral-900 tracking-tight "}>
                  {post.metadata.title}{post.restricted ? "*" : ""}
                </Link>
                {post.external?.slug ?
                  <Link href={`/b/log/${post.external.slug}`} className={"text-neutral-400 tracking-tight text-xs"}>
                    External Post: {post.external.metadata.title}
                  </Link>
                  : null}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
