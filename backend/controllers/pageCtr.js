const { model } = require('mongoose')
const File = model('File')
const contentDisposition = require("content-disposition");
const fs = require('fs')
const path = require('path');
const pageModel = model('Page')

exports.all = async (req, res) => {
    try {
        const allpages = await  pageModel.find().sort({ createdAt: -1});
        try {
            res.status(200).json({
                message: "Successfully Fetched All Pages",
                data: allpages
            });
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
exports.create = async (req, res) => {
    const newPage = new pageModel();
    try {
        await newPage.save();
        res.status(200).json({ message: "Successfully Created a New Page" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.findpage = async (req, res) => {
    try {
        const {id: pageId} = req.params;
        const pagedata = await pageModel.findOne({_id: pageId});
        if(!pagedata) {
            return res.status(404).json({message: "No Exist Page"});
        }
        else {
            return res.status(200).json({
                data: pagedata,
                message: "Get a page Successfully"
            });
        }
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }
}
exports.update = async (req, res) => {
    try {
        const {id: pageId} = req.params;
        const pagedata = await pageModel.findByIdAndUpdate(pageId, req.body);
        if (pagedata) {
            res.status(200).json({ message: "Successfully Updated Page"});
        }
        else {
            return res.status(404).json({message: "Can't Find the Page"});
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
exports.delete = async (req, res) => {
    try {
        const {id: pageId} = req.params;
        const pagedata = await pageModel.findByIdAndDelete(pageId, req.body);
        if (pagedata) {
            res.status(200).json({ message: "Successfully Deleted Page"});
        }
        else {
            return res.status(404).json({message: "Can't Find the Page"});
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}