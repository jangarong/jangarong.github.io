import { NextApiRequest, NextApiResponse } from "next";

const step = 10

const projects: Project[] = [
  {
    name: 'SolidGuard',
    description: 'Blockchain security tool used to take quick action against newly-discovered vulnerabilities in the blockchain.',
    imgUrl: '/api/files/solidguard.png',
    zipUrl: '/api/files/solidguard.zip',
    githubUrl: 'https://github.com/SolidGuard/solidguard'
  },
  {
    name: 'Stock Market Predictions',
    description: 'Using headline keywords and aggregation to predict stock movements!',
    imgUrl: '/api/files/stock-predictions.png',
    zipUrl: '/api/files/stock-predictions.zip',
    githubUrl: 'https://github.com/jangarong/StockMarketPredictions',
    kaggleUrl: 'https://www.kaggle.com/code/magichanics/amateur-hour-using-headlines-to-predict-stocks/notebook'
  },
  {
    name: 'GRR-Pi',
    description: 'Robot that atonomously creates maps and locates objects.',
    imgUrl: '/api/files/grr-pi.jpg',
    zipUrl: '/api/files/grr-pi.zip',
    githubUrl: 'https://github.com/jangarong/StockMarketPredictions'
  },
  {
    name: 'Mummy Run',
    description: 'A history-themed flash game featuring MCQs and bullethell!',
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
