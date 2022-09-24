const FoodItem = require("../models/FoodItem.js");
module.exports = function (router) {
  router.post("/add-menu-utems", addMenuItems);
};

async function addMenuItems(req,res){
        try {
            if(req.body.items.length == 0) throw "No menu items on request"
            const menuItems = req.body.items;
            for(let item in menuItems)
                await FoodItem.create(item);
            return res.status(200).json({m:"success"})
        } catch (error) {
            console.log(error);
            return res.status(400).json({e:error});
        }
}