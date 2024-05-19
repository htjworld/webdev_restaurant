const express = require('express')
const uuid = require("uuid");

const resData = require('../util/restaurant-data'); // 현재 있는 곳보다 하나 상위에 있는 파일들 상대 경로

const router = express.Router();

router.get("/restaurants", function (req, res) {
    const storedRestaurants = resData.getStoredRestaurants();
  
    res.render("restaurants", {
      numberOfRestaurants: storedRestaurants.length,
      restaurants: storedRestaurants,
    });
  });
  
router.get("/restaurants/:id", function (req, res) {
// 무조건 :을 붙여야됨
// /restaurants/r1
    const restaurantId = req.params.id; //:restaurantId
    const storedRestaurants = resData.getStoredRestaurants();

    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
        return res.render("restaurant-detail", { restaurant: restaurant });
        }
    }

    res.status(404).render("404");
});
  
router.get("/recommend", function (req, res) {
    res.render("recommend");
});

router.post("/recommend", function (req, res) {
    const restaurant = req.body; // body에서 name 파싱해서 가져오기
    restaurant.id = uuid.v4();

    const restaurants = resData.getStoredRestaurant();

    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect("/confirm"); // confirm 페이지로 리다이렉트함 (이중 제출을 막음)
});

router.get("/confirm", function (req, res) {
    res.render("confirm");
});

module.exports = router;