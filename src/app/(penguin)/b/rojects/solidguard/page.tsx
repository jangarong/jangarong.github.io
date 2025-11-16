import Header from '@/components/b/header'

export const metadata = {
    title: 'Jan Garong [B] - SolidGuard',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
               <div>            <Header>SolidGuard</Header>
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <div className="mb-4">
                This is a blockchain security project that basically audits smart contracts using
                a database of known vulnerable smart contracts. It uses a simple method of checking
                code diff checks since many smart contracts do depend on common libraries.
            </div>
            <div className="mb-4">
                The GitHub source code no longer works since this was made for Ethereum pre-merge, 
                so here is a video demoing our product, narrated by Nancy (one of the devs) and I!
            </div>
            <div className="mb-4">
                Credits are at the end of the video!
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <video width="320" height="240" controls>
                    <source src="/assets/b/solidguard/demo.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
        </div>
    )
}
