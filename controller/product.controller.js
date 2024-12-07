const productModule = require("../model/product.model");

const createProduct = async (req, res) => {
    try {
        const { name, image, price } = req.body;
        const product = await productModule.create({
            name,
            image,
            price
        });
        res.status(200).json({
            product,
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const findProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const product = await productModule.find({ name });
        res.status(200).json({
            product,
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { name } = req.body;
        const product = await productModule.delete({ name });
        res.status(200).json({
            product,
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    findProduct,
    deleteProduct
};