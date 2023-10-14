export const addItem = (selProduct) => {
    return{
        type : "ADDITEM",
        payload : selProduct
}
}
export const delItem = (selProduct) => {
    return{
        type : "DELITEM",
        payload : selProduct
    }
}