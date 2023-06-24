import { dehydrate } from '@tanstack/react-query';

import { Posts } from '@/components/features/post/posts';
import { ReactQueryHydrate, getQueryClient, fetchNode } from '@/utils'
import { getPosts, PostKeys } from '@/components/features/post/post-queries'

export default async function PostsPage() {
	const fetch = fetchNode()
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(PostKeys.lists(), () => getPosts({ fetch }));
	const dehydratedState = dehydrate(queryClient);

	return (
		<ReactQueryHydrate state={dehydratedState}>
			<Posts />
		</ReactQueryHydrate>
	);
}