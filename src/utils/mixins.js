export const getFilterData = (searchText,restaurents) => {
    const filteredData = restaurents.filter(x => x?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filteredData;

}