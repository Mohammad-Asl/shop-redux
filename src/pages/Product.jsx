import { useSelector } from "react-redux";
import Page404 from "../components/404";
import Card from "../components/Card";
import Summary from "../components/Summary";

const Product = () => {
  const cart = useSelector((state) => state.allCart.cart);
  
  if(!cart?.length)
  return <Page404 text={"Your cart\nis empty"}/>

  return (
    <div className="flex justify-between max-w-[80%] m-auto">
      <Card />
      <Summary />
    </div>
  );
};

export default Product;
