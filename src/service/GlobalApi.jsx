import axios from "axios";

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText/json';
     
const config={
     Headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask':[
                   'places.photos',
                   'places.displayName',
                   'places.id'

        ]
     }
}

export const GetPlaceDetails=async(data)=>{
        console.log("i am getplaceDetail");
        
        await axios.post(BASE_URL,data,config);
}



