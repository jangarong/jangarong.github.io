import { NextApiRequest, NextApiResponse } from "next";

const step = 10

const projects: Project[] = [
  {
    name: 'SolidGuard',
    description: 'Blockchain security tool used to take quick action against newly-discovered vulnerabilities in the blockchain by notifying product owners via email or freezeing smart contracts on discovery!',
    imgUrl: '/api/files/solidguard.png',
    zipUrl: '/api/files/solidguard.zip',
    githubUrl: 'https://github.com/SolidGuard/solidguard'
  },
  {
    name: 'Stock Market Predictions',
    description: 'Submission for Kaggle\'s Two Sigma compeition. Features include headline keywords and aggregations over a time interval with LGBM. Complete with data visualizations!',
    imgUrl: '/api/files/stock-predictions.png',
    zipUrl: '/api/files/stock-predictions.zip',
    githubUrl: 'https://github.com/jangarong/StockMarketPredictions',
    kaggleUrl: 'https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks/notebook'
  },
  {
    name: 'GRR-Pi',
    description: 'The Great Roaming Robot (GRR) autonomously creates maps, storing information that the robot recieves through its camera input. Made with Python and Raspberry Pi.',
    imgUrl: '/api/files/grr-pi.jpg',
    zipUrl: '/api/files/grr-pi.zip',
    githubUrl: 'https://github.com/jangarong/StockMarketPredictions'
  },
  {
    name: 'Mummy Run',
    description: 'History-themed game programmed in ActionScript in collaboration with students from Holy Redeemer Catholic Elementary School. A combination between bullethell and multiple choice questions.',
    imgUrl: '/api/files/mummy-run.png',
    zipUrl: '/api/files/mummy-run.zip',
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
