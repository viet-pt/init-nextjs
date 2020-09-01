const routers = require("next-routes")();

routers.add("introduces","/gioi-thieu")
routers.add("products","/san-pham")
routers.add("detialproduct","/san-pham/:slug.:id");
routers.add("contact","/lien-he");
routers.add("reason","/tin-tuc/:slug.:id");

module.exports = routers;