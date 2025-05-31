import { BlogPosts } from '@/components/blog/posts'

export const metadata = {
  title: 'Jan Garong',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh] mt-[48px] mx-[24px] mb-[72px]">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">What&apos;s New</h1>
      <BlogPosts />
    </div>
  )
}
