import { useSelector } from 'react-redux';
import WishListItem from '../components/WishListItem';

const WishList = () => {
  const wishListItem = useSelector((state) => state.wishlist);
  return (
    <div className="col">
      {wishListItem.length === 0 ? (
        <h4 className="text-center mt-5 fs-1 fw-bold">
          Your wishlist is empty
        </h4>
      ) : (
        wishListItem.map((item) => <WishListItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default WishList;
