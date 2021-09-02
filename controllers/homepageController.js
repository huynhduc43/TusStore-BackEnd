const productModel = require('../models/productModel');

exports.displayHomepage = async (req, res, next) => {
    //Top 4 san pham duoc them gan day nhat
    const newestProducts = await productModel.find({
        path: {$in: [
            /,Cactus,/,
            /,StoneLotus,/
        ]}
    }).sort({addDate: 'desc'}).limit(4);

    //Top 8 san pham ban duoc nhieu nhat
    const hotProducts = await productModel.find({
        path: {$in: [
            /,Cactus,/,
            /,StoneLotus,/
        ]}
    }).sort({sold: 'desc'}).limit(8);

    res.send({
        newestProducts: newestProducts,
        hotProducts: hotProducts,
    });
}