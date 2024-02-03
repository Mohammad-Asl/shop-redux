import { useEffect } from "react";
import logo from "../assets/nike.png";
import { Profile } from "iconsax-react";
import { Heart } from "iconsax-react";
import { Shop } from "iconsax-react";
import { SearchNormal } from "iconsax-react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { calculateCartTotal } from "../Redux/features/CartSlice";

const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateCartTotal());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  return (
    <div className="flex justify-between items-center m-5 px-20">
      <Link to="/">
        <img src={logo} className="w-[70px] h-[70px] " />
      </Link>
      <div className="flex items-center gap-10 cursor-pointer">
        <SearchNormal className="m-1 w-[20px]" />
        <span className="px-1 text-gray-300">|</span>
        <Profile />
        <Heart />
        <Badge badgeContent={totalQuantity} color="success">
          <Link to="/product">
            <Shop/>
          </Link>
        </Badge>
      </div>
    </div>
  );
};

export default Navbar;
