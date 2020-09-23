const routers = require("next-routes")();

routers.add("introduces", "/gioi-thieu")
routers.add("sellcar", "/ban-xe")
routers.add("contact", "/lien-he");
routers.add("detialproduct", "/san-pham/:slug.:id");
routers.add("reason", "/tin-tuc/:slug.:id");

module.exports = routers;