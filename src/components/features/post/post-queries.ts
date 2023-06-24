import {
	useQuery,
	type UseQueryOptions,
} from '@tanstack/react-query'

import { OptionalFetcherArgs, FetchError, fetchBrowser } from '@/utils'
import { PostResponse } from './post-model'

export const PostKeys = {
	all: ['POST'],
	lists: () => [...PostKeys.all, 'LISTS'],
}

export const getPosts = async ({ fetch }: OptionalFetcherArgs) => {
	return await fetch.get<PostResponse[]>('https://jsonplaceholder.typicode.com/posts')
}
export type PostsCache = Awaited<ReturnType<typeof getPosts>>
export function useGetPosts<TData = PostsCache>(
	options?: UseQueryOptions<PostsCache, FetchError, TData>
) {
	return useQuery<PostsCache, FetchError, TData>(
		PostKeys.lists(),
		() => {
			const fetch = fetchBrowser()
			return getPosts({ fetch })
		}, options
	)
}
