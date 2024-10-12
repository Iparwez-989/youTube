import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from './constants';
import { cacheResults } from './searchSlice';

const useSuggestionBox = () => {
    const [searchQuery,setSearchQuery] = useState();
    const [suggestion,setSuggestion] = useState([]);
    const [suggestionBox,setSuggestionBox] = useState(false);
    const dispatch = useDispatch();
    
    const searchCache = useSelector(store => store.search)
    // console.log(searchCache[searchQuery])
    useEffect(()=>{
        // console.log(searchQuery) 
        if(!searchQuery) return;    // it'll not show undefined(early returning)
        const timer = setTimeout(()=>{
          if(searchCache[searchQuery]){
            setSuggestion(searchCache[searchQuery])
          }else{
             getSearchSuggestion();
          }
        },200);
        return ()=>{
          clearTimeout(timer);
        }
      },[searchQuery])
      const getSearchSuggestion = async()=>{
        console.log("API CALL"+ searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json =await data.json();
        // console.log(json[1])
        setSuggestion(json[1]);
        dispatch(cacheResults({
          [searchQuery]:json[1]
        }))
  
      }
  return [searchQuery,suggestion,suggestionBox,setSearchQuery,setSuggestion,setSuggestionBox]
}

export default useSuggestionBox
