import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../LOGIN & REGISTER/WishlistSlice"; 
import { Link } from "react-router-dom";
import MidNav from "../LAYOUT/MidNav";
import Footer1 from "../LAYOUT/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <>
    <MidNav/>
    <div className="text-center mt-44">
      <button className="font-bold rounded-2xl px-6 py-2 underline text-2xl">My Cart</button>
      {wishlist.length ? (
        wishlist.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-4 mx-10 ">
 
       <LazyLoadImage src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
            
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.price}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md" >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your Cart is empty. <br /> <button className="bg-blue-600 p-2 text-white rounded-xl mt-4"><Link to="/shop">Back To Shop..</Link></button>
</p>
      )}
    </div>
    <Footer1/>
    </>
  );
}
