import Image from 'next/image'

export const metadata = {
    title: 'Jan Garong [B] - Using Headlines to Predict Stocks',
    // description: 'Read my blog.',
}

export default function Page() {
    return (
        <div className="mt-[48px] mx-[24px] mb-[72px]">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Amateur Hour - Using Headlines to Predict Stocks</h1>
            <div className="mb-4">
                During Grade 12, I did this Two Sigma Kaggle competition to predict stocks using headlines.
                I applied a basic approach of using the individual words themselves as
                indicators. Little did I know I would be applying a similar strategy in
                a university course, CSC401H1: Natural Language Computing.
            </div>
            <div className="mb-4">
                During evaluation from January to June 2019, I had my best performance
                up to May, where my model was in the top 12%, but then tumbled 
                down in June where the model dropped to the top 22%. It got 277 forks
                though as of 2025, which is pretty cool :)
            </div>
            <div className="ml-4">
                <div className="mb-4">
                    • <a href="https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks"  className="text-blue-600 hover:text-purple-400">Kaggle</a>
                </div>
                <div className="mb-4">
                    • <a href="https://github.com/jangarong/StockMarketPredictions"  className="text-blue-600 hover:text-purple-400">GitHub</a>
                </div>
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/stockmarket/screen0.png"} alt="screenshot0" width={480} height={360} />
            </div>
            <div className="w-[100%] flex justify-center my-8">
                <Image src={"/assets/b/stockmarket/output.png"} alt="screenshot1" width={480} height={1080} />
            </div>
        </div>
    )
}
