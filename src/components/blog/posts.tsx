import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/lib/blog'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div>
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
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/b/log/${post.slug}`}
          >
            <div className="ml-[32px] w-[100%] flex flex-row space-x-0 space-x-2">
              <p className="text-neutral-600 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
