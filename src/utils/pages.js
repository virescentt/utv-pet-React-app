export const getPageCount = (totalCount, limit) => {
    // округление до целых в большую сторону
    return Math.ceil(totalCount / limit)
}

// export const getPagesArray = (totalPages) => {
//     let result = []
//       for (let i = 0; i < totalPages; i++) {
//         result.push(i + 1);    
//       }
//     return result;
// }