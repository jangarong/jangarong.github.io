import Link from "next/link"
import Image from "next/image"
import Header from '@/components/b/header'

export const metadata = {
    title: 'Jan Garong [B] - PSA',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
               <div>            <Header>Penguin Secret Agency</Header>
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">

            <div className="mb-4">
                <Image alt={'psa0'} src="/assets/b/psa/psa.jpeg" width={200} height={100} className="object-cover w-half h-half" />

            </div>
            <div className="mb-4">
                Originally the RPi now known as the &quot;Penguin Secret Agency&quot;
                has been the same RPi used in my Grade 12 Great Roaming Robot, repurposed to serve many key services I use mostly for file storage
                and archival purposes:
            </div>
            <div className="mb-4 ml-4">
                <div className="mb-4">
                    • <Link href="https://corp.jangarong.com/" className="text-blue-600 hover:text-purple-400">ArchiveBox at &quot;/&quot;</Link>
                </div>
                <div className="mb-4">
                    • <Link href="https://corp.jangarong.com/sync" className="text-blue-600 hover:text-purple-400">Syncthing at &quot;/sync&quot;</Link>
                </div>
                <div className="mb-4">
                    • <Link href="https://corp.jangarong.com/files" className="text-blue-600 hover:text-purple-400">Filebrowser at &quot;/files&quot;</Link>
                </div>
            </div>
            <div className="mb-4">
                The above links should work only when connected to the VPN.
            </div>
            <div className="mb-4">
                For maximum security, all of these Docker containers are guarded by an NGINX Reverse Proxy,
                on top of it being in a network managed by WireGuard&apos;s VPN and PiHole&apos;s DNS. Additionally,
                this service can be ran with no internet connection. Ideally, this VPN/DNS setup would be 
                replaced with the router above, and can only be connected to via ethernet cables.
            </div>
            <div className="mb-4">
                You can check out the  <Link href="https://github.com/jangarong/penguin-secret-agency" className="text-blue-600 hover:text-purple-400">GitHub Repo</Link> here!
            </div>
        </div>
        </div>
    )
}
