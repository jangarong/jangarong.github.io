import Header from '@/components/b/header'

export const metadata = {
    title: 'Jan Garong [B] - HEX',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
               <div>            <Header>This Website</Header>
        <div className="mt-[48px] mx-[24px] mb-[72px] min-h-[100vh]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">CSC499Y5: Hex</h1>
            <div className="mb-4">
               Hex is an AI service that intelligently groups students based on a personality/team matching survey.
               This is ran by UTM CS Professor Pooja Vashisth.
            </div>
            <div className="mb-4">
               While I cannot share the application itself, it was a Python web application which 
               hosted a machine learning model which was based off of the surveys and research our team
               did. I was responsible for making the backend, which includes serving endpoints and 
               handling asynchronous events that may take a while (like testing the model on a set of data).
            </div>
        </div>
        </div>
    )
}
