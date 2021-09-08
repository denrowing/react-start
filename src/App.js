import {useEffect} from "react";
import {discoverMovie} from "./servise/moveServise";

export default function App() {
  useEffect(() => {
    discoverMovie().then(value => console.log(value.data.results))
  }, [])
  return (
      <div>
         <header>

         </header>
      </div>
  );
}