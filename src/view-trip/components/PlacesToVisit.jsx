import { PlaceCardItem } from "./PlaceCardItem"


export const PlacesToVisit = ({trip}) => {
  return (
    <div>
       <h2 className="font-bold text-lg mt-5">Places to Visit</h2>

        <div>
            {
                trip?.tripData?.Itinerary.map((item,index)=>(
                    <div key={index} className="mt-5">
                         <h2 className="font-medium text-lg">{item?.Day}</h2>
                         <div className="grid md:grid-cols-2 gap-5">
                         {
                             item.Places.map((plan,index)=>(
                                 <div key={index} className="my-3">
                                        <h2 className="font-medium text-sm text-orange-600">{plan?.TimeTravel}</h2>
                                        <PlaceCardItem plan={plan}/>
                                      
                                 </div>
                             ))
                         }
                         </div>
                         
                    </div>
                ))
            }
        </div>
    </div>
  )
}
