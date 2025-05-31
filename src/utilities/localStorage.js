const getItemsToCartLocalStorage = () => {
    const getItems = localStorage.getItem('cart');
    if (getItems) {
        const convertedItems = JSON.parse(getItems);
        return convertedItems;
    }
    return [];
}

const saveItemsToCartLocalStorage = (value) => {
    const convertToStringify = JSON.stringify(value);
    localStorage.setItem('cart', convertToStringify);
}

const setItemsToCartLocalStorage= (items) => {
    const availableItems = getItemsToCartLocalStorage();
    const updateAvailableItems = [...availableItems, items];
    saveItemsToCartLocalStorage(updateAvailableItems);
}

const removeItemsToCartLocalStorage= (id) => {
    const getItems = getItemsToCartLocalStorage();
    const updateValue = getItems.filter(item => item.id !== id);
    saveItemsToCartLocalStorage(updateValue);
}

export{getItemsToCartLocalStorage ,removeItemsToCartLocalStorage,setItemsToCartLocalStorage}