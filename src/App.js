//coming from episode 01
// const heading = React.createElement("h1", {id: 'heading', xyz:'abc'}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);
/*
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm h1 tag</h1>
 *     </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I am h1 tag")
//     )
// )

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const parent = React.createElement(
//   "div",
//   {id:"parent"},
//   React.createElement(
//     "div",
//     {id:"child"},
//     [React.createElement("h1",{},"I'm in h1 tag"),React.createElement("h1",{},"I'm in h1 tag, klkdldkfkdlf")]
//   )
// )

// const newParent = React.createElement(
//   "div",
//   {class:'newParent'},
//   React.createElement(
//     "div",
//     {id:"child"},
//     [React.createElement("h1",{},"I'm in h1 tag"),React.createElement("h1",{},"I'm in h1 tag")]
//   )
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent,newParent);

// const heading = React.createElement("h1",{},"Hello World From React!");
// const root = ReactDOM.creaeRoot(document.getElementById("root"));
// root.render(heading);

//10:57 coming from Episode 03 Part 02

//first start with React Element
//lets revise again...what is the react element

// const heading = React.createElement("h1",{id:'heading'},"Namaste React");
// console.log("heading",heading);

// const jsxheading = <h1 id="heading">Namaste React using JSX</h1>
// console.log('jsxheading',jsxheading);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//root.render(jsxheading);

//React - Ep: 03 Part 04
// const heading = (
//   <h1 className='head' tabIndex="5">
//     Namaste React Using JSX
//   </h1>
// )

// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component...</h1>;
// };
// const fun = () => {
//   return true;
// };

// const func = () => true;
// const myfunc = () => {
//   return true;
// };

//fun and myfunc both are same , with reuturn we have mentioned it in curly braces

// const HeadingComponentTwo = () => (
//   <div>
//     <h1>Namaste React Functional Component-2</h1>
//   </div>
// );

// const HeadingComponentThree = () => {
//   return (
//     <div id="container">
//       <HeadingComponentTwo/>
//       {/* Component Composition */}
//       <h1>Namaste React Functional Component-3</h1>
//     </div>
//   );
// };

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(<HeadingComponent/>);
//root.render(<HeadingComponentTwo/>);
//root.render(<HeadingComponentThree />);

//Namaste React - Ep.03 Part.05
//we can use normal function
// const Title = function(){
//   return(
//     <h1>
//       Namate React using JSX inside Title
//     </h1>
//   )
// }

//we can inject/write any js code inside JSX with {}
// const HeadingComponentFour = () =>(
//   number = 100,
//   <div id="container">
//     {10*20 * number}
//     <h1>Namate REact Functional Component inside HeadingComponentFour</h1>
//   </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponentFour/>)

/*--------------------------------------------------------------------------------------- */
// const Header = () => {
//   return (
//     <div className="header">
//       <div>
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

//stryleCard is js object
const styleCard = {
  backgroundColor: "#f0f0f0",
};

//so above styleCard we have used in RestaurantCard

// const RestaurantCard = ({restName, cuisine}) => {
// const RestaurantCard = (props) => {
// const RestaurantCard = (props) => {
//   console.log(props);
//   //const {restName, cuisine} = props;
//   const { resData } = props;
//   return (
//     // <div className="res-card" style={styleCard}>
//     <div className="res-card" style={{ backgroundColor: "f0f0f0" }}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fsitbray4gq1kxcndqqx"
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           resData.info.cloudinaryImageId
//         }
//       />
//       {/* <h3>Meghana Food</h3> */}
//       {/* <h3>{props.restName}</h3> */}
//       {/* <h3>{restName}</h3> */}
//       <h3>{resData.info.name}</h3>
//       <h3>{resData.info.cuisines.join(", ")}</h3>
//       <h3>{resData.info.avgRating} stars</h3>
//       <h3>{resData.info.costForTwo}</h3>
//       <h3>{resData.info.sla.deliveryTime} min</h3>
//       {/* <h4>Biryani, North Indian, Asian</h4> */}
//       {/* <h4>{props.cuisine}</h4> */}
//       {/* <h4>{cuisine}</h4> */}
//       {/* <h4>4.3 star rating</h4>
//       <h4>38 min</h4> */}
//     </div>
//   );
// };

// resObj -- resList
// const resList = [
//   {
//     info: {
//       id: "23817",
//       name: "Domino's Pizza",
//       cloudinaryImageId: "an17mgybnzywspqdbyi1",
//       locality: "Cambridge Road",
//       areaName: "Ulsoor",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//       avgRating: 4.3,
//       parentId: "2456",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 30,
//         serviceability: "SERVICEABLE",
//         slaString: "30 mins",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-12 02:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹150 OFF",
//         subHeader: "ABOVE ₹299",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//   },
//   {
//     info: {
//       id: "18987",
//       name: "Nandhana Palace",
//       cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
//       locality: "Amarjyothi Layout",
//       areaName: "Domlur",
//       costForTwo: "₹500 for two",
//       cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
//       avgRating: 4.3,
//       parentId: "2120",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 2.6,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "2.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 01:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//     },
//   },
//   {
//     info: {
//       id: "10820",
//       name: "California Burrito",
//       cloudinaryImageId: "b58sysfvskincfwmgoqd",
//       locality: "Koramangala",
//       areaName: "Koramangala",
//       costForTwo: "₹250 for two",
//       cuisines: [
//         "Mexican",
//         "American",
//         "Salads",
//         "Continental",
//         "Keto",
//         "Healthy Food",
//       ],
//       avgRating: 4.6,
//       parentId: "1252",
//       avgRatingString: "4.6",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 41,
//         lastMileTravel: 7.7,
//         serviceability: "SERVICEABLE",
//         slaString: "40-45 mins",
//         lastMileTravelString: "7.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 01:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//         },
//       },
//     },
//   },
//   {
//     info: {
//       id: "289261",
//       name: "BOX8 - Desi Meals",
//       cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
//       locality: "New Thipasandra",
//       areaName: "Indiranagar",
//       costForTwo: "₹250 for two",
//       cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
//       avgRating: 4.5,
//       parentId: "10655",
//       avgRatingString: "4.5",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 1.1,
//         serviceability: "SERVICEABLE",
//         slaString: "13-23 mins",
//         lastMileTravelString: "1.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 02:00:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹179",
//       },
//     },
//   },
//   {
//     info: {
//         id: "154365",
//         name: "The Red Box",
//         cloudinaryImageId: "kbckmxkqrtla1irwnc57",
//         locality: "HAL 3rd Stage",
//         areaName: "jeevanbhimanagar",
//         costForTwo: "₹400 for two",
//         cuisines: ["Chinese"],
//         avgRating: 4,
//         parentId: "1636",
//         avgRatingString: "4.0",
//         totalRatingsString: "5K+",
//         sla: {
//           deliveryTime: 25,
//           lastMileTravel: 2.1,
//           serviceability: "SERVICEABLE",
//           slaString: "25-30 mins",
//           lastMileTravelString: "2.1 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2024-02-13 23:59:00",
//           opened: true,
//         },
//         badges: {},
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {},
//             textBased: {},
//             textExtendedBadges: {},
//           },
//         },
//     },
//   },
//   {
//     info: {
//       id: "10584",
//       name: "Pizza Hut",
//       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       locality: "Indiranagar",
//       areaName: "Indiranagar",
//       costForTwo: "₹300 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4,
//       parentId: "721",
//       avgRatingString: "4.0",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 34,
//         lastMileTravel: 0.2,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "0.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//     },
//   },
//   {
//     info: {
//       id: "23681",
//       name: "McDonald's",
//       cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
//       locality: "Cmh Road",
//       areaName: "Indiranagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//       avgRating: 4.4,
//       parentId: "630",
//       avgRatingString: "4.4",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 21,
//         lastMileTravel: 0.2,
//         serviceability: "SERVICEABLE",
//         slaString: "20-25 mins",
//         lastMileTravelString: "0.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 02:45:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//     },
//   },
//   {
//     info: {
//       id: "457837",
//       name: "Istah - The Mediterranean Way",
//       cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
//       locality: "Murugeshpalya",
//       areaName: "Indiranagar",
//       costForTwo: "₹250 for two",
//       cuisines: [
//         "Mediterranean",
//         "Snacks",
//         "Biryani",
//         "Grill",
//         "Kebabs",
//         "Arabian",
//         "Lebanese",
//         "Beverages",
//         "Desserts",
//         "Italian",
//         "Turkish",
//       ],
//       avgRating: 4.5,
//       parentId: "3518",
//       avgRatingString: "4.5",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 35,
//         lastMileTravel: 4.2,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "4.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 01:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//             description: "OnlyOnSwiggy",
//           },
//         ],
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "OnlyOnSwiggy",
//                   imageId:
//                     "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹110",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//   },
//   {
//     info: {
//       id: "506322",
//       name: "Louis Burger",
//       cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
//       locality: "2nd stage domlur",
//       areaName: "Indiranagar",
//       costForTwo: "₹600 for two",
//       cuisines: ["Burgers", "American", "Fast Food"],
//       avgRating: 4.2,
//       parentId: "22485",
//       avgRatingString: "4.2",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 32,
//         lastMileTravel: 1.9,
//         serviceability: "SERVICEABLE",
//         slaString: "30-35 mins",
//         lastMileTravelString: "1.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 04:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//   },
//   {
//     info: {
//       id: "25618",
//       name: "KFC",
//       cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
//       locality: "100 ft road",
//       areaName: "Indiranagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 4.2,
//       parentId: "547",
//       avgRatingString: "4.2",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 0.2,
//         serviceability: "SERVICEABLE",
//         slaString: "20-25 mins",
//         lastMileTravelString: "0.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-14 01:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//     },
//   },
//   {
//     info: {
//       id: "49189",
//       name: "Truffles",
//       cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
//       locality: "Indiranagar",
//       areaName: "Indiranagar",
//       costForTwo: "₹450 for two",
//       cuisines: ["American", "Desserts", "Italian", "Continental"],
//       avgRating: 4.5,
//       parentId: "218065",
//       avgRatingString: "4.5",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 0.5,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "0.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2024-02-13 23:30:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
//             shortDescription: "Perfect Cake Delivery",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
//                   shortDescription: "Perfect Cake Delivery",
//                 },
//               },
//             ],
//           },
//         },
//       },
//     },
//   },
// ];

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="serach">Search</div>
//       <div className="res-container">
//         {/* <RestaurantCard restName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
//         <RestaurantCard restName="KFC" cuisine="Burger, Fast Food"/> */}
//         {/* <RestaurantCard resData={resList[0]}/>
//         <RestaurantCard resData={resList[1]}/>
//         <RestaurantCard resData={resList[2]}/>
//         <RestaurantCard resData={resList[3]}/>
//         <RestaurantCard resData={resList[4]}/> */}
//         {/* {
//           resList.map( (restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
//         } */}
//         {
//           resList.map((restaurant,index)=>(<RestaurantCard key={index} resData={restaurant} />))
//         }
//         {/* <RestaurantCard resData={resList[5]}/>
//         <RestaurantCard resData={resList[6]}/>
//         <RestaurantCard resData={resList[7]}/>
//         <RestaurantCard resData={resList[8]}/>
//         <RestaurantCard resData={resList[9]}/> */}

//         {/* <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard />
//         <RestaurantCard /> */}
//       </div>
//       {/* RestoCard */}
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
