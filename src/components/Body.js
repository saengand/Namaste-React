import RestaurantCard from "./RestaurantCards";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //(local)state variables - super powerful variable

  // const [listOfRestaurants, setlistOfRestaurants] = useState([
  //     {
  //       info: {
  //       id: "23817",
  //       name: "KFC",
  //       cloudinaryImageId: "an17mgybnzywspqdbyi1",
  //       locality: "Cambridge Road",
  //       areaName: "Ulsoor",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.3,
  //       parentId: "2456",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "10K+",
  //       deliveryTime: 30,
  //       }
  //     },
  //     {
  //       info: {
  //         id: "23817",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "an17mgybnzywspqdbyi1",
  //         locality: "Cambridge Road",
  //         areaName: "Ulsoor",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //         avgRating: 0.3,
  //         parentId: "2456",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         deliveryTime: 30,
  //       }
  //     },
  //     {
  //       info: {
  //         id: "23817",
  //         name: "MCD",
  //         cloudinaryImageId: "an17mgybnzywspqdbyi1",
  //         locality: "Cambridge Road",
  //         areaName: "Ulsoor",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //         avgRating: 4.1,
  //         parentId: "2456",
  //         avgRatingString: "4.3",
  //         totalRatingsString: "10K+",
  //         deliveryTime: 30,
  //       }
  //     }]);

  //const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  //without mockData, with swiggy live data
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered -- input text -- search button");

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9780919&lng=77.63785589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    //optional chanining

    console.log("json",json);
  };

  // if(listOfRestaurants.length === 0){
  //   // return <h1>Loading...</h1>
  //   return <Shimmer/>
  // }
  console.log("Body Rendered");
  //normal js variable
  let listOfRestaurantsJS = [
    {
      info: {
        id: "23817",
        name: "KFC",
        cloudinaryImageId: "an17mgybnzywspqdbyi1",
        locality: "Cambridge Road",
        areaName: "Ulsoor",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        deliveryTime: 30,
      },
    },
    {
      info: {
        id: "23817",
        name: "Domino's Pizza",
        cloudinaryImageId: "an17mgybnzywspqdbyi1",
        locality: "Cambridge Road",
        areaName: "Ulsoor",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 0.3,
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        deliveryTime: 30,
      },
    },
    {
      info: {
        id: "23817",
        name: "MCD",
        cloudinaryImageId: "an17mgybnzywspqdbyi1",
        locality: "Cambridge Road",
        areaName: "Ulsoor",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        deliveryTime: 30,
      },
    },
  ];

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="serach">Search</div> */}
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res.data.cards[0].card.card.gridElements.infoWithStyle.restaurants[0].info.Name.includes(searchText));
              //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
              console.log("filteredRestaurants --> ",filteredRestaurants);
              setlistOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          //onMouseOver={()=>{console.log("Button Clicked");}}
          // onClick={()=>{console.log("Button Clicked");}}
          onClick={() => {
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // )
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
            //console.log("listOfRestaurants", listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard restName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
          <RestaurantCard restName="KFC" cuisine="Burger, Fast Food"/> */}
        {/* <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]}/>
          <RestaurantCard resData={resList[2]}/>
          <RestaurantCard resData={resList[3]}/>
          <RestaurantCard resData={resList[4]}/> */}
        {/* {
            resList.map( (restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
          } */}
        {/* {
            resList.map((restaurant,index)=>(<RestaurantCard key={index} resData={restaurant} />))
          } */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={resList[5]}/>
          <RestaurantCard resData={resList[6]}/>
          <RestaurantCard resData={resList[7]}/>
          <RestaurantCard resData={resList[8]}/>
          <RestaurantCard resData={resList[9]}/> */}

        {/* <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard /> */}
      </div>
      {/* RestoCard */}
    </div>
  );
};

export default Body;
