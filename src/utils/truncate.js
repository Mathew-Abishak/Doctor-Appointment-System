// export const truncate = (str, max) =>{
//     return str.length > max ? str.substring(0, max-1) + '...' : str;
// }
export const truncate = (str, max) => {
    if (str === null || str === undefined) {
        return str;
    }
    return str.length > max ? str.substring(0, max - 1) + '...' : str;
}
