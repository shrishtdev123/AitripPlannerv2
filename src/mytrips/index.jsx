import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react";
import { UserTriCarditem } from "../mytrips/Components/UserTriCarditem";


export const Mytrips= () => {


    const [trips, setTrips] = useState([]);

    useEffect(() => {
      const fetchTrips = async () => {
        try {
          // Define the query
          const q = query(collection(db, "Aitrips"));
  
          // Execute the query and get documents
          const querySnapshot = await getDocs(q);
  
          // Extract data from querySnapshot and set it to state
          const tripsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setTrips(tripsData);
        } catch (error) {
          console.error("Error fetching trips:", error);
        }
      };
  
      fetchTrips();
    }, []);
      
    //  console.log(trips);
     
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 flex
    flex-col justify-center">

           <h2 className="font-bold text-3xl">My Trip</h2>

           <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        { trips.length>0?trips.map((trip) => (
          <UserTriCarditem key={trip.id} trip={trip} />
            ))
            :[1,2,3,4,5].map((item,index)=>(
                   <div key={index} className="h-[250px] w-full bg-slate-200 animate-pulse rounded-xl">
                       
                   </div>
            ))

        }
      </div>
           
    </div>
  )
}
