import {useEffect} from "react";
import {discoverMovie} from "../servise/moveServise";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../servise/movie.api";

export default function Header() {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies} = state


    useEffect(() => {
        discoverMovie().then(value => {
        console.log(value.data.results)
        dispatch({type: "FETCH_MOVIES", payload: value.data})
        })
    }, [])

  return (

    <div>
        {
            movies.map(value => <div> {value.data.results.title} </div>)
        }

    </div>
  );
}