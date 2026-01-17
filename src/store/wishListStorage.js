export const loadWishListFromStorage = () => {
  try {
    const data = localStorage.getItem('wishlist');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveWishListToStorage = (wishlist) => {
  try {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  } catch {}
};
