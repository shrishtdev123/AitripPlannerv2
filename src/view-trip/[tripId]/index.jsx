import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast } from "sonner";
import { InfoSection } from "../components/InfoSection";
import { Hotels } from "../components/Hotels";
import { PlacesToVisit } from "../components/PlacesToVisit";
import { Footer } from "../components/Footer";

export const Viewtrip = () => {

      const {tripId}=useParams();
      const [trip,setTrip]=useState([]);

      useEffect(() => {
        tripId && GetTripData();
    }, [tripId]);
    
//     use to get information to get data from firebase database which we store
      const GetTripData=async()=>{
        const docRef=doc(db,'Aitrips',tripId);
        const docSnap=await getDoc(docRef)

          if(docSnap.exists())
          {
            console.log("documnet",docSnap.data());
             setTrip(docSnap.data());
          }
          else
          {
             console.log("No such Document");
              toast("No trip Found");
          }
      }

       console.log(trip);
       
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
    
      {/* Information Section */}
          <InfoSection trip={trip}/>
      {/* Recommended Hotels */}
        <Hotels trip={trip}/>
      {/* Daily plane */}

       <PlacesToVisit trip={trip}/>

       {/* footer section */}
       <Footer trip={trip}/>
     
    </div>
  )
}
