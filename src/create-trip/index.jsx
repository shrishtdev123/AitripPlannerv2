import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { AI_PROMPT, SelectBugetOption, SelectTrevelsList } from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import { db } from "@/service/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { toast } from "sonner"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export const CreateTrip = () => {

    const [place,setPlace]=useState();
    const [formdata,setFormdata]=useState();
    const [loading ,setLoading]=useState(false);
     
    const nevigate=useNavigate();

     const handleInputchange=(name,value)=>{

           if(name==='noOfdays' && value>5)
           {
             console.log("please enter value less than 5");
             
           }
                setFormdata({...formdata,[name]:value})
     }

     useEffect(()=>{
        console.log(formdata);
        
     },[formdata])

     // genrate trip logic start here measn what will be happen when someone click on genrate button 


     const generatetrip = async () => {
      if (!formdata?.noOfdays || !formdata?.buget || !formdata?.traveler || formdata.noOfdays > 5) {
        toast("Please enter all details");
        return;
      }

    
    //  Constructing the final prompt by replacing placeholders
      setLoading(true)
      const final_prompt = AI_PROMPT
        .replace('{location}', place)
        .replace('{totalDays}', formdata?.noOfdays)
        .replace('{traveler}', formdata?.traveler)
        .replace('{buget}', formdata?.buget);
    
      console.log(final_prompt);


    
      try 
      {
       
        const result = await chatSession.sendMessage(final_prompt);
        console.log("gernated by ai",result?.response?.text());
            setLoading(false);
        SaveGneratedAiData(result?.response?.text());
      } 
      catch (error) 
      {
        console.error("Error generating trip:", error);
        toast("There was an error processing your request.");
      }

     
    };

    // save generated ai data into firebase database 

    const SaveGneratedAiData=async(TripData)=>{
             setLoading(true);
      // Add a new document in collection "cities"
       const docId=Date.now().toString();
         await setDoc(doc(db, "Aitrips",docId), {
                        
                              userSelection:formdata,
                              place:place,
                              tripData:JSON.parse(TripData),
                               id:docId
                   });

                   setLoading(false);

                   nevigate(`/view-trip/${docId}`);

    }
   
  return (
   <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 flex
    flex-col justify-center">
        <h2 className="font-bold text-3xl">Tells us your travel prefernce 🌴</h2>
        <p className="mt-3 text-gray-500 text-xl">just provide some baisc information ,and our trip planner will generate a customized itineary based on your prefernce</p>

        <div className="mt-20 flex flex-col gap-9">
            <div>
            {/* it will not work as we have not use googl api 
                 when we buy than we reaplace with api key than i would work 
             */}
                {/* <h2 className="text-xl my-3 font-medium">what is destination of choice</h2>
                <GooglePlacesAutocomplete
                    apiKey=""
                    selectProps={{
                          place,
                          onChange:(v)=>{setPlace(v)
                            handleInputchange("location",v)
                          }
                    }}
                /> */}

                <input type="text" placeholder="Enter city Name"

                     onChange={(e)=>setPlace(e.target.value)}
                 />
            </div>
            <div>
            <h2 className="text-xl my-3 font-medium">how many days are you travel</h2>
             <Input placeholder={'Ex.3'} type="number"
                   onChange={(e)=>handleInputchange('noOfdays',e.target.value)}
             />
            </div>
              {/* buget inforamtion here */}
             <div>
             <h2 className="text-xl my-3 font-medium">what is your Baget?</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                      {
                          SelectBugetOption.map((item,index)=>(
                            <div key={index}
                                onClick={()=>handleInputchange("buget",item.title)}
                             className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer 
                               ${formdata?.buget==item.title && 'shadow-lg border-black'}
                             `}>
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                          ))
                      }
                </div>
             </div>

             {/* travelaer information here */}

             <div>
             <h2 className="text-xl my-3 font-medium">who do you plan traveling with on your next adventure?</h2>
                <div className="grid grid-cols-3 gap-5 mt-5">
                      {
                        SelectTrevelsList.map((item,index)=>(
                            <div key={index}
                               onClick={()=>handleInputchange("traveler",item.people)}
                             className={`p-4 border rounded-lg    hover:shadow-lg cursor-pointer
                               ${formdata?.traveler==item.people && 'shadow-lg border-black'}
                             `}>
                                <h2 className="text-4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                          ))
                      }
                </div>
             </div>
        </div>
         <div className="my-10 flex justify-end">
         <Button
           disable={loading}
           onClick={generatetrip}>
            {
              
              loading?<AiOutlineLoading3Quarters
                          className="h-7 w-7 animate-spin"
               />:'Generate Trip'

            }
         </Button>
         </div>
   </div>
  )
}
