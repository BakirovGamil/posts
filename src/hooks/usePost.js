import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
		if(sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}

		return posts;
	}, [sort, posts]);

    return sortedPosts;
}

export function usePost(posts, sort, query) {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
		if(query) {
			const regExp = new RegExp(query, "i");

			return sortedPosts.filter(post => regExp.test(post.title));
		}
		
		return sortedPosts;

	}, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}