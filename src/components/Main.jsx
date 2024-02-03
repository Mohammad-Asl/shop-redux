import { Phone } from "@mui/icons-material";
import Item from "./Item";
const Main = () => {
  return (
    <>
      <div className="flex items-center justify-between m-5 px-20">
        <h2 className="font-bold text-xl">Cart</h2>
        <div className="flex items-center gap-2">
          <p className="font-bold text-md">Need help?</p>
          <div className="flex items-center">
            <Phone className="text-gray-400 p-1" />
            <p className="text-gray-400 text-sm">(555)555-1278</p>
          </div>
        </div>
      </div>
      <Item />
    </>
  );
};

export default Main;
