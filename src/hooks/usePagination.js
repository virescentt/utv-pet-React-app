import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const paginationPanel = useMemo(() => {
    let result = []
      for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);    
      }
    // console.log('usePagination man');
    return result;
  }, [totalPages]);

  return paginationPanel;
};