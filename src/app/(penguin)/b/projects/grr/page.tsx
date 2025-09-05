

export const metadata = {
    title: 'Jan Garong [B] - GRR',
    // description: 'Read my blog.',
}
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">G.R.R. - Great Roaming Robot</h1>
            <div className="mb-4">
                <Image alt={'psa0'} src="/assets/b/grr/grr-0.jpg" width={300} height={100} className="object-cover w-half h-half" />
            </div>
            <div className="mb-4">
                The Great Roaming Robot autonomously creates maps, storing information that the robot recieves through its camera input. It produces spreadsheet files (csv) for the user to analyze tracking the robot&apos;s movement within the map, as well as images taken by the robot. Some applications that this robot and GUI could do is determine population size in an enclosed region, creating labelled maps for the user, or viewing and mapping locations where the user could not access.
            </div>
            <div className="mb-4">
                Here are some maps it made while roaming! For context, green is considered a free space,
                red is a block or stop that the sensors detected, yellow is where the robot currently is and
                the black square is where it started. In contained areas, you can see it accurately paint
                out the map, but in more spread-out worlds, it mainly draws large green lines like below.
            </div>
            <div className="mb-4">
                <Image alt={'grr0'} src="/assets/b/grr/0.png" width={100} height={100} className="object-cover w-half h-half" />
                <Image alt={'grr1'} src="/assets/b/grr/1.png" width={100} height={100} className="object-cover w-half h-half" />
            </div>
            <div className="mb-4">
                This robot was developed by me, Jan, and Matteo Tempo, one of my classmates in Grade 12!
            </div>
            <div className="mb-4">
                You can check out the  <Link href="https://github.com/jangarong/GRR-Pi" className="text-blue-600 hover:text-purple-400">GitHub Repo</Link> here!
            </div>
        </div>
    )
}
