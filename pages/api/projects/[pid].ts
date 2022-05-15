import { NextApiRequest, NextApiResponse } from "next";

type Project = {
  name: string
  description: string
  image: string
  github?: string
  kaggle?: string
  zip?: string
}

const step = 10

const projects: Project[] = [
  {
    name: 'SolidGuard',
    description: `
        Blockchain security tool used to take quick action against newly-discovered 
        vulnerabilities in the blockchain by notifying product owners via 
        email or freezeing smart contracts on discovery!
        `,
    image: '/api/files/solidguard.png',
    zip: '/api/files/solidguard.zip',
    github: 'https://github.com/SolidGuard/solidguard'
  },
  {
    name: 'Stock Market Predictions',
    description: `
        Submission for Kaggle's Two Sigma compeition. Features include headline keywords
        and aggregations over a time interval with LGBM. Complete with data
        visualizations!
        `,
    image: '/api/files/stock-predictions.png',
    zip: '/api/files/stock-predictions.zip',
    github: 'https://github.com/jangarong/StockMarketPredictions',
    kaggle: 'https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks/notebook'
  },
  {
    name: 'GRR-Pi',
    description: `
        The Great Roaming Robot (GRR) autonomously creates maps, storing information that
        the robot recieves through its camera input. Made with Python and Raspberry Pi.
        `,
    image: '/api/files/grr-pi.jpg',
    zip: '/api/files/grr-pi.zip',
    github: 'https://github.com/jangarong/StockMarketPredictions'
  },
  {
    name: 'Mummy Run',
    description: `
        History-themed game programmed in ActionScript in collaboration with students from
        Holy Redeemer Catholic Elementary School. A combination between bullethell and 
        multiple choice questions.
        `,
    image: '/api/files/mummy-run.png',
    zip: '/api/files/mummy-run.zip',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  const { pid } = req.query
  if (!pid || Array.isArray(pid)) {
    return res.status(400).end('Invalid page number')
  }
  const page = parseInt(pid)
  if (page < 1) {
    return res.status(400).end('Page must be >= 1')
  }
  const returnProjects = projects.slice((page - 1) * step, page * step)
  return res.send(returnProjects)
}
