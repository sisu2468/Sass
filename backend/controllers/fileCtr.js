const { model } = require('mongoose')
const File = model('File')
const contentDisposition = require("content-disposition");
const fs = require('fs')
const path = require('path');

exports.create = async (req, res) => {
    try {
        const files = req.files;
        const result = []
        for (let i = 0; i < files.length; i++) {
            const file = await File.create({
                filename: files[i].filename,
                originalname: files[i].originalname,
                mimetype: files[i].mimetype,
                size: files[i].size
            })
            result.push(file)
        };
        res.json({ message: 'file_uploaded', result })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.read = async (req, res) => {
    try {
        const { _id } = req.params
        const file = await File.findOne({ _id })
        if (file) {
            res.writeHead(200, {
                "Content-Type": file.mimetype + "***" + encodeURIComponent(file.originalname),
                "Content-Encoding": "utf8",
                "Content-Disposition": contentDisposition(file.originalname),
                "Content-Transfer-Encoding": "binary",
                "Content-Length": file.size || 0,
                "Cache-Control": "private, no-transform, no-store, must-revalidate",
                Expires: 0,
            });
            res.end(fs.readFileSync('uploads/' + file.filename), "binary");
            return
        }
        res.status(404).json({ message: 'file_not_available' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.cteatecomponent = async (req, res) => {
    const { uniqueString } = req.body;
    const componentName = `Component_${uniqueString}`;
    const componentContent = `
        import React from 'react';

        const ${componentName} = ({ title, description, formlabel, formfield, SetForm, myform, setClear, handleSubmit, bkcolor, textcolor, buttoncolor, position }) => (
            <div className='px-20 h-full' style={{ backgroundColor: bkcolor, color: textcolor }}>
                <h1 style={{ color: textcolor}} className='text-center mb-5 pt-8 text-4xl font-bold'>{title}</h1>
                <h2 style={{color: textcolor}} className='text-2xl mb-5'>{description}</h2>
                <h3 style={{color: textcolor}} className='text-xl mb-5'>{formlabel}</h3>
                <textarea className='mb-4 w-full rounded-lg' rows={4} placeholder={formfield} maxLength={1000} onChange={SetForm} value={myform}/>
                <div wrap className='flex item-center justify-center'>
                    <button className='mr-10 rounded-md w-20 font-bold text-white' style={{ backgroundColor: buttoncolor }} onClick={setClear}>Clear<i data-lucide="paintbrush"></i></button>
                    <button className='rounded-md h-10 w-20 font-bold text-white' style={{ backgroundColor: buttoncolor }} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        );

        export default ${componentName};
    `;

    const savePath = path.join('\\src\\features\\Apps', `${componentName}.js`);

    fs.writeFile(savePath, componentContent, (err) => {
        if (err) {
            console.error('Error writing file', err);
            res.status(500).json({ success: false, error: 'Failed to create component' });
        } else {
            res.json({ success: true });
        }
    });
}