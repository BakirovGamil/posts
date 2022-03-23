export function getPageCount(totalCount, limit) {
    return Math.ceil(totalCount/ limit);
}

export function getPagesArray(totalPages) {
    const arrayOfPage = [];

    for(let i = 0; i < totalPages; i++) {
        arrayOfPage.push(i + 1);
    }

    return arrayOfPage;
}