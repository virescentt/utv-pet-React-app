import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const paginationPanel = useMemo(() => {
    console.log('totalPages from usePagination')
    console.log(totalPages)
    let result = []
      for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);    
      }
    // console.log('usePagination man');
    console.log('result')
    console.log(result)
    return result;
  }, [totalPages]);

  return paginationPanel;
};