import BFriendsV2 from "@/components/b-friends-v2";

export const metadata = {
  title: 'Jan Garong [B] - People who I think are cool.',
}

export default function Page() {
  return (
    <div className="min-h-[100vh] bg-[#fdfad6] pt-[48px]">
      <div>
        <BFriendsV2 />
      </div>
    </div>
  )
}
