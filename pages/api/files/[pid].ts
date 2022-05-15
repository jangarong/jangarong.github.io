// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type FileObj = {
  name: string
  mediaType: string
  buffer: Buffer
}

type FileDict = {
  [key: string]: FileObj
}

const filesPath = 'files'

const fileObjs: Omit<FileObj, 'buffer'>[] = [
  {
    name: 'resume.pdf',
    mediaType: 'application/pdf'
  },
  {
    name: 'solidguard.zip',
    mediaType: 'application/zip'
  },
  {
    name: 'stock-predictions.zip',
    mediaType: 'application/zip'
  },
  {
    name: 'grr-pi.zip',
    mediaType: 'application/zip'
  },
  {
    name: 'mummy-run.zip',
    mediaType: 'application/zip'
  },
  {
    name: 'solidguard.png',
    mediaType: 'image/png'
  },
  {
    name: 'stock-predictions.png',
    mediaType: 'image/png'
  },
  {
    name: 'grr-pi.jpg',
    mediaType: 'image/jpg'
  },
  {
    name: 'mummy-run.png',
    mediaType: 'image/png'
  },
]

const fileDicts = getFileBuffers(filesPath, fileObjs);

function getFileBuffers(filesPath: string, fileObjs: Omit<FileObj, 'buffer'>[]): FileDict {
  return fileObjs.reduce((buffers: FileDict, fileObj: { name: string, mediaType: string }) => {
    const filePath = path.resolve(`./${filesPath}`, fileObj.name);
    buffers[fileObj.name] = { ...fileObj, buffer: fs.readFileSync(filePath) };
    return buffers;
  }, {})
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
) {
  const { pid } = req.query;
  if (!pid || Array.isArray(pid)) {
    return res.status(400).end('Bad format');
  }
  if (Object.keys(fileDicts).indexOf(pid) === -1) {
    return res.status(404).end('Not found');
  }
  res.setHeader('Content-Type', fileDicts[pid].mediaType)
  return res.send(fileDicts[pid].buffer);
}
