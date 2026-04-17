import BFriendsV2 from "@/components/b-friends-v2";

export const metadata = {
  title: 'Jan Garong [B] - cool people :)',
}

export default function Page() {
  return (
    <div className="min-h-[100vh] bg-[#fefde1] pt-[48px]">
      <div>
        <BFriendsV2 />
      </div>
    </div>
  )
}
