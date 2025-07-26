import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log("Функция отработала  ");

    // просто механизм сортировки
    if (sort) {
      [...posts].sort((a, b) => a[sort].localeCompare(sort));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}
