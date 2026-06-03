import { findPdfUrls } from 'grapdf'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const sort = query.sort === 'true'
  const reverse = query.reverse === 'true'
  const limit = query.limit ? parseInt(query.limit as string, 10) : undefined
  const selector = query.selector ? (query.selector as string) : undefined
  const include = query.include ? (query.include as string) : undefined
  const exclude = query.exclude ? (query.exclude as string) : undefined

  if (!url) {
    throw createError({ statusCode: 400, message: 'url is required' })
  }

  const urls = await findPdfUrls(url, { sort, reverse, limit, selector, include, exclude })
  return { urls }
})
