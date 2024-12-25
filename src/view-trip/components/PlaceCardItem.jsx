import { Button } from "@/components/ui/button"
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PlaceCardItem = ({plan}) => {
  return (
   <Link to={`https://www.google.com/maps/search/?api=1&query=${plan?.PlaceName}`}>
       <div className="border rounded-xl p-3 mt-2 flex gap-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img src="/img.jpg" alt=""
            className=" w-[130px] h-[130px] rounded-xl"
         />
         <div>
            <h2 className="font-bold text-lg">{plan?.PlaceName}</h2>
            <p className="text-sm text-gray-400">{plan?.PlaceDetails}</p>
            <p className="mt-2">{plan?.BestTimeToVisit}</p>
            {/* <Button size="sm">
            <FaMapLocation />
            </Button> */}
         </div>
    </div>
   </Link>
  )
}
