import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Heart, Trash } from "iconsax-react";
import {
  calculateCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  likeItem,
} from "../Redux/features/CartSlice";

import { dollarToNumber } from "../tools/convert";
import Page404 from "./404";

const Card = () => {
  const cart = useSelector((state) => state.allCart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCartTotal());
  }, [cart, dispatch]);

  const handlerLike = (data) => {
    dispatch(likeItem(data.id))
  }

  return (
    <div className="flex flex-col my-10 ">
      <p className="bg-gray-50 text-gray-600 px-20 py-5 rounded-xl">
        Log in or Regisre now and from free shopping and easier returns!
      </p>
      {!cart?.length && (
        <div className="flex items-center justify-center content-center h-full">
          <Page404 text={"Your cart\nis empty"} />
        </div>
      )}
      {cart?.map((data) => (
        <div
          key={data.id}
          className="flex justify-between w-full my-10 border-b-2 py-7"
        >
          <div className="bg-gray-50 w-[180px] rounded-xl mr-1">
            <img src={data.img} className="w-[150px] p-2 m-auto mt-8" />
          </div>

          <div className="flex justify-between flex-1">
            <div className="flex flex-col px-20">
              <h2 className="text-lg font-bold">{data.title}</h2>
              <div className="flex flex-col mt-5 text-gray-600 text-sm leading-[30px]">
                <p>{data.des}</p>
                <p>{data.color}</p>
                <p>Size: 6</p>
                <div className="flex items-center gap-5">
                  <div className="flex gap-3 items-center border-solid border-2  border-gray-300  rounded px-4">
                    <button
                      onClick={() => dispatch(decreaseItemQuantity(data.id))}
                      className="text-xl font-bold text-gray-500"
                    >
                      -
                    </button>
                    <span>{data.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseItemQuantity(data.id))}
                      className="text-xl font-bold text-gray-500"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => handlerLike(data)}>
                    <Heart color={`${data.like ? 'red' : 'gray'}`} variant={`${data.like ? "Bold" : "Linear"}`}/>
                  </button>
                  <Trash onClick={() => dispatch(removeItem(data.id))} />
                </div>
              </div>
            </div>
            <h2 className="text-lg font-bold">
              ${dollarToNumber(data.price) * parseInt(data.quantity)}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
