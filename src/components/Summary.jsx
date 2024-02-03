import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Summary = () => {
  const { totalPrice } = useSelector((state) => state.allCart);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(calculateCartTotal());
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cart]);

  return (
    <div className="flex flex-col">
      <div className="sticky top-0  w-[300px] border rounded-md p-5 h-fit">
        <h2 className="font-bold text-xl border-b-2 py-7">summary</h2>
        <div className="flex justify-between items-center py-5 text-gray-500 font-bold">
          <p>Tax</p>
          <span>$45.00</span>
        </div>
        <div className="flex justify-between items-center border-b-2 py-5 text-gray-500 font-bold">
          <p>Estimated delivery cost</p>
          <span>$12.00</span>
        </div>
        <div className="flex items-center justify-between font-bold text-md border-b-2 py-7">
          <h2>Total Price</h2>
          <p>${totalPrice}</p>
        </div>
        <div className="rounded-xl m-auto py-5">
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              toast.success("Your purchase was successful", {
                position: "top-center"
              })
            }
          >
            Go to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
