// const cloudinary = require('../configs/cloudinary');
// const image = await cloudinary.uploader.upload(profile,{folder:'ProjectSGMS'})
// await Ministry.create({
//     ministry_title,
//     profile:image.url
// }) 
const Ministry = require('../models/ministry.models');

exports.create = async (req, res) => {
    const user = req.payload;
    try {
        const { ministry_title, profile } = req.body;
        if (!user.id) {
            return res.status(404).json({message:"this user id not found "});
        }
        await Ministry.create({
            ministry_title,
            profile,
            user_id:user.id
        }) 
        res.status(200).json({message: 'create ministry successfully'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.selectAll = async (req, res) => {
    try {
        const ministry = await Ministry.findAndCountAll();
        if (ministry <= 0) {
            return res.status(404).json({message: 'not found data'})
        }
        res.status(200).json(ministry)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.selectById = async (req, res) => {
    try {
        const { id } = req.params;
        const ministry = await Ministry.findByPk(id);
        if (!ministry) {
            return res.status(404).json({message:'this id not found'});
        }
     
        res.status(200).json(ministry);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const ministry = await Ministry.findByPk(id);
        if (!ministry) {
            return res.status(404).json({message:'this id not found'});
        }

        let user = req.body;
        delete user.user_id;

        await ministry.update({
            ministry_title:req.body.ministry_title,
            profile:req.body.profile    
        })
        res.status(200).json({message: 'update ministry successfully'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const ministry = await Ministry.findByPk(id);
        if (!ministry) {
            return res.status(404).json({message:"this id not found"});
        }
        await ministry.destroy();
        res.status(200).json({message: 'delete ministry successfully'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
