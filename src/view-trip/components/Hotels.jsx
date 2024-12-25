import { Link } from "react-router-dom"


export const Hotels = ({trip}) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-10">Hole Recommendation</h2>

       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {trip?.tripData?.Hotels?.map((item,index)=>(
                 <Link to={`https://www.google.com/maps/search/?api=1&query=${item?.HotelAddress}`}
                       target="_blank"
                     key={index}
                 >
                  
                 <div key={index} className="hover:scale-105 transition-all cursor-pointer">
                    <img src="/img.jpg" alt="img upload nhi hua hai"
                        className="rounded-xl"
                     />
                     <div className="my-2 flex flex-col gap-2">
                         <h2 className="font-medium">{item?.HotelName}</h2>
                         <h2 className="text-xs text-gray-500">{item?.HotelAddress}</h2>
                         <h2 className="text-sm">💰{item?.Price}</h2>
                         <h2 className="text-sm">⭐{item?.Rating}</h2>
                     </div>
                 </div>
                
                 </Link>
          ))}

       </div>
    </div>
  )
}
