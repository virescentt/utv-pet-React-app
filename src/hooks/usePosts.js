import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  console.log("Функция sortedPosts отработала");
  const sortedPosts = useMemo(() => {
    // просто механизм сортировки
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);

  console.log(sortedPosts);
  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  console.log(sortedAndSearchedPosts);
  return sortedAndSearchedPosts;
};
