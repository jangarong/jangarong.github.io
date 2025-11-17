import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}
// @ts-expect-error: migrated code will fix later
function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}
// @ts-expect-error: migrated code will fix later
function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}
// @ts-expect-error: migrated code will fix later
function getMDXData(dir) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))
    const restricted = slug.includes('.corp')

    return {
      metadata,
      slug,
      content,
      restricted,
    }
  }).filter((file) => (!file.restricted || process.env.RESTRICTED_MODE === 'true'))
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'posts'))
}

interface MdxData {
  metadata: Metadata;
  slug: string;
  content: string;
  restricted: boolean;
  external?: {
    metadata: Metadata;
    slug: string;
  }
}

export function getBlogPostsWithExternalMetadata(): MdxData[] {
  const mdxData = getMDXData(path.join(process.cwd(), 'posts'))
  if (process.env.RESTRICTED_MODE !== 'true') {
    return mdxData;
  }
  const mdxDataExternalPairs = mdxData.filter(
    (file) => mdxData.filter(
      (file2) =>
        (file.slug.includes('.corp') && file2.slug === file.slug.replace('.corp', '')) ||
        (file2.slug.includes('.corp') && file.slug === file2.slug.replace('.corp', ''))
    ).length === 1
  ).filter((file) => !file.slug.includes('.corp'))
  const mdxDataNoPairs = mdxData.filter((file) => mdxDataExternalPairs.filter((file2) => file2.slug === file.slug).length === 0)
  const mdxDataWithExternal = mdxDataNoPairs.map((file) => {
    if (file.restricted) {
      const mdxDataExts = mdxData.filter((file2) => file2.slug === file.slug.replace('.corp', ''))
      if (mdxDataExts.length === 1) {
        return {
          ...file, external: {
            metadata: mdxDataExts[0].metadata,
            slug: mdxDataExts[0].slug
          }
        }
      }
    }
    return file
  })
  return mdxDataWithExternal
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
