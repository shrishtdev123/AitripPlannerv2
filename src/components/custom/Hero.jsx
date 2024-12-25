import { Link } from "react-router-dom"
import { Button } from "../ui/button"


export const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1
        className="font-extrabold text-[43px] text-center mt-16"
      >
     <span className="text-[#f56551]"> Discover Your Next Adventure with AI:</span>
         Personalized
         Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam aliquam consequuntur voluptate cumque eaque veniam. Animi officia labore fugiat aspernatur repellat, tempore incidunt at dolorum expedita dolores earum nesciunt.</p>
      <Link to={"/create-trip"}>
      <Button >Get Started,Iits free</Button>
      </Link>
</div>
  )
}
