import { useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
        
  return (
    
    <div className="p-3 shadow-sm flex justify-between items-center w-full">
    <img src="logo.svg" alt="logo" />

    <div className="flex gap-4">
                
         <a href="/create-trip">
          <Button >+ Create Trip</Button>
         </a>
                 
          <a href="/my-trip">
          <Button>My trip</Button>
          </a>
          
    </div>
  </div>
  );
};
