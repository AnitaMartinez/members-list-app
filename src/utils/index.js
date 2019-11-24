export const getNextPage = (pagination, currentPage) => {
    if(pagination && pagination.next) {
        return currentPage + 1
    }
    if(pagination && pagination.previous) {
        return currentPage - 1
    }
    const firstPage = 1
    return firstPage
}