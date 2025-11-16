import Header from '@/components/b/header'
import { BlogPosts } from '@/components/blog/posts'

export const metadata = {
  title: 'Jan Garong [B] - Logs',
  // description: 'Read my blog.',
}

export default function Page() {
  return (
    <div>
      <Header>What&apos;s New?</Header>
      <div className="min-h-[100vh] mt-[48px] mx-[24px] mb-[72px]">      <BlogPosts /></div>
    </div>
  )
}
