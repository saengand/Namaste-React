import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  //const {restName, cuisine} = props;
  const { resData } = props;
  return (
    // <div className="res-card" style={styleCard}>
    <div className="res-card" style={{ backgroundColor: "f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fsitbray4gq1kxcndqqx"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      {/* <h3>Meghana Food</h3> */}
      {/* <h3>{props.restName}</h3> */}
      {/* <h3>{restName}</h3> */}
      <h3>{resData.info.name}</h3>
      <h3>{resData.info.cuisines.join(", ")}</h3>
      <h3>{resData.info.avgRating} stars</h3>
      <h3>{resData.info.costForTwo}</h3>
      <h3>{resData.info.deliveryTime} min</h3>
      {/* <h4>Biryani, North Indian, Asian</h4> */}
      {/* <h4>{props.cuisine}</h4> */}
      {/* <h4>{cuisine}</h4> */}
      {/* <h4>4.3 star rating</h4>
        <h4>38 min</h4> */}
    </div>
  );
};

export default RestaurantCard;
