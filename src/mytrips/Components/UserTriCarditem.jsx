import { Link } from "react-router-dom";


export const UserTriCarditem = ({trip}) => {

      console.log("this usercarditem",trip);
       
      
  return (
      <Link to={`/view-trip/${trip?.id}`}>
        <div className="hover:scale-105 transition-all">
        <img src="./img3.avif" alt="" className="object-cover rounded-xl h-[250px]" />
        <div>
            <h2 className="font-bold text-lg">{trip?.place}</h2>
            <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfdays}Days trip with {trip?.userSelection?.buget
            } buget</h2>
        </div>
    </div>
      </Link>
  )
}
