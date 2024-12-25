

export const SelectTrevelsList=[
        {
            id:1,
            title:"Just me",
            desc:"A sole travel in exporation",
            icon:"✈️",
            people:"1 people"
        },
        {
            id:2,
            title:"A Couple",
            desc:"Two travels in tandem",
            icon:"🥢",
            people:"2 people"
        },
        {
            id:3,
            title:"Family",
            desc:"A group of fun loving adv",
            icon:"👪",
            people:"3 to 5 people"
        },
        {
            id:4,
            title:"Friends",
            desc:"A group of fun loving adv",
            icon:"👫",
            people:"more than 5 people"
        }
        

]

export const SelectBugetOption=[
       {
           id:1,
           title:"cheap",
           desc:"stay consious of costs",
           icon:'💰'
       },
       {
        id:2,
        title:"Modrate",
        desc:"keep cost on average side",
        icon:'🫰'
     },
     {
        id:3,
        title:"Luxry",
        desc:"more option ",
        icon:'🫰'
    }
]

//Genral prompt 

export const AI_PROMPT = `
Generate a travel plan in JSON format with the following structure:
1. **Hotels**:
   - Each hotel object should include:
     - HotelName: string
     - HotelAddress: string
     - Price: number
     - HotelImageUrl: string
     - GeoCoordinates: { latitude: number, longitude: number }
     - Rating: number
     - Description: string
2. **Itinerary**:
   - Each day should include a list of places:
     - PlaceName: string
     - PlaceDetails: string
     - PlaceImageUrl: string
     - GeoCoordinates: { latitude: number, longitude: number }
     - TicketPricing: number
     - TimeTravel: string
     - BestTimeToVisit: string

Dynamic Inputs:
- Location: {location}
- TotalDays: {totalDays}
- Traveler: {traveler}
- Budget: {budget}

Make sure the JSON response adheres to the described structure and includes a detailed plan for {totalDays} days, tailored to the given inputs.`;



