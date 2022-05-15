import { NextApiRequest, NextApiResponse } from "next"

type Organization = {
    name: string
    imgUrl: string
    url: string
}

const organizations: Organization[] = [
    {
        name: 'CertiK',
        imgUrl: '/api/files/certik.png',
        url: 'https://www.certik.com/'
    },
    {
        name: 'University of Toronto',
        imgUrl: '/api/files/uoft.png',
        url: 'https://www.utoronto.ca/'
    },
    {
        name: 'dApp Technology Inc.',
        imgUrl: '/api/files/dapp.svg',
        url: 'https://dapp-inc.com/'
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Organization[]>
  ) {
    return res.send(organizations)
  }
  