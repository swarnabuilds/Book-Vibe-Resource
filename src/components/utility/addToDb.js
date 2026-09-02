// --- Read List Functions ---
const getStoreReadList = () => {
    // check local storage read-list exist or not exist
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    } else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        console.log(id, 'already exists in read list');
    } else {
        storeList.push(id);
        // storeList id convert string using stringify 
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storedListStr);
    }
}

// --- Wishlist Functions ---
const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    } else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storeList = getStoreWishList();
    if (storeList.includes(id)) {
        console.log(id, 'already exists in wishlist');
    } else {
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export { addToStoreReadList, getStoreReadList, addToStoreWishList, getStoreWishList };