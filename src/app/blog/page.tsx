import { BlogPosts } from '@/components/blog/posts'
import "./globals.css"

export const metadata = {
  title: 'Jan Garong',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh]">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">What&apos;s New</h1>
      <BlogPosts />
    </div>
  )
}
