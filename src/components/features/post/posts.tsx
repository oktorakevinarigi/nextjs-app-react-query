'use client';

import React from 'react';
import { useGetPosts } from './post-queries'

export const Posts = () => {
	const { data, isLoading } = useGetPosts()

	if (isLoading) return <div>Loading</div>;

	if (!data) return <div>Not found</div>;

	return (
		<div className='divide-y'>
			{data.map((post) => (
				<div key={post.id} className='py-4'>
					<p className='text-2xl font-semibold'>{post.title}</p>
					<p className='mt-2 text-gray-200'>{post.body}</p>
				</div>
			))}
		</div>
	);
};