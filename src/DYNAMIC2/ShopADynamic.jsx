import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../LOGIN & REGISTER/WishlistSlice";
import { Link } from "react-router-dom";
export default function ShopADynamic({ shopA }) {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isInWishlist = wishlist.some((item) => item.id === shopA.id);

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(shopA));
    }
  };
  return (
    <>
    <div className="relative">
      <div className="parentt rounded-2xl p-1 text-center relative">
        <LazyLoadImage
          src={shopA.img}
          alt={shopA.title}
          className="h-[19rem] w-[40rem] hover:-translate-y-3 duration-150 rounded-xl"
        />
        <p className="flex justify-around font-bold">
          {shopA.title} <span>{shopA.price}</span>
        </p>

        <div className="absolute lg:right-4 right-2 top-2 text-white z-10">
           {isInWishlist ? (
            <IoMdHeart
              className="bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer text-red-600"
              onClick={handleAddToWishlist}
            />
          ) : (
            <IoMdHeartEmpty
              className="bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer"
              onClick={handleAddToWishlist}
            />
          )}

          <RiShoppingBasket2Line className="bg-black opacity-40 rounded-full p-2 text-4xl cursor-pointer mt-1" />
        </div>

        <div className="relative">
          <h1 className="absolute lg:-top-[21rem] -top-[19rem] lg:left-5 bg-white rounded-xl px-2 font-semibold text-sm z-10">
            Get 20% off
          </h1>
        </div>

        <h1 className="title rounded-3xl border-4 border-white text-sm px-5 py-2 cursor-pointer hover:bg-white hover:text-black font-bold hover:border-4 hover:border-black">
          QUICK VIEW
        </h1>
      </div>
    </div>
    </>
  );
}
