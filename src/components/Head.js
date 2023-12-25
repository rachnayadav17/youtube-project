import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);

  const searchCache=useSelector((store)=>store.search)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => {

      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      } else{
        getSearchSuggestions()
      }

      }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  };

 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1">
      <div className="flex col-span-1 mt-4 ml-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer rounded-full hover:bg-gray-200"
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2385/PNG/512/hamburger_menu_icon_144302.png"
        />
        <a href="/">
          <img
            className="h-14 object-contain mt-[-16px] ml-4"
            alt="youtube-logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-14">
        <div className="m-3">
          <input
            className="px-5 w-1/2 border border-gray-300 rounded-l-full p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-300 rounded-r-full px-3 py-2 bg-gray-100">
            {/* <img
              src="https://emojipedia.org/_next/static/media/search-dark.51fa5582.svg"
              alt="Search Icon"
              className="h-5 w-5"
            /> */}
            🔍
          </button>
        </div>
        {showSuggestions && (<div className="fixed bg-white w-[32rem] border border-gray-300 rounded-lg shadow-lg px-2 py-2">
          <ul>
            {suggestions.map((s)=>(
                <li key={s} className="py-2 px-5 shadow-sm hover:bg-gray-200">🔍 {s}</li>
            ))}
            
            
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL0xm6dUTEVbYn_suX7dMuhA05fIIb_pATA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
