const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname,'..', "data", "restaurant.json");

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoredRestaurants : getStoredRestaurants, // 밖에서 사용할 함수: 안에 있는 함수
  storeRestaurants : storeRestaurants
};
