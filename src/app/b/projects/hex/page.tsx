import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">CSC499Y5: Hex</h1>
            <div className="mb-4">
               TODO: Please complete. Hex is an AI service that intelligently groups students based on a personality/team matching survey.
               This is ran by UTM CS Professor Pooja Vashisth.
            </div>
        </div>
    )
}
