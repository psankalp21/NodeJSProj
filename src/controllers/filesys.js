const multer = require("multer");
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage }).array('files', 2);



function fileupload(req, res) {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Error uploading files:', err);
            return res.status(400).json({ error: 'File upload error' });
        }

        if (!req.files || req.files.length < 2) {
            return res.status(400).json({ error: 'Two files are required' });
        } else {
            return res.json({ message: 'Files uploaded successfully :)' });
        }
    });

    fs.readFile(`${__dirname}/../../uploads/` + 'sample1.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log('Content of uploaded files are :', data);
        }
    });

    fs.readFile(`${__dirname}/../../uploads/` + 'sample2.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
    
            console.log('Content of uploaded files are :', data);
        }
    });
}




function filemerge(req, res) {

    const file01 = req.body.file01
    const file02 = req.body.file02


    if (fs.existsSync(`${__dirname}/../../uploads/${file01}`)) {
        const f1 = fs.readFileSync(`${__dirname}/../../uploads/${file01}`, 'utf-8');
        const f2 = fs.readFileSync(`${__dirname}/../../uploads/${file02}`, 'utf-8');

        const mergedContent = `${f1}` + `${f2}`;

        fs.writeFile(`${__dirname}/../../uploads/merged.txt`, mergedContent, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("merged")
            }

        })

        fs.unlink(`${__dirname}/../../uploads/${file01}`, (err) => {
            if (err) {
                console.log(`Error deleting ${file01}`, err);
            }
        });

        fs.unlink(`${__dirname}/../../uploads/${file02}`, (err) => {
            if (err) {
                console.log(`Error deleting ${file02}`, err);
            }
        });

        res.send("Success");

    }
    else {
        res.send("Invalid file name")
        console.log("File not found")
    }
}


function filemove(req, res) {

    const now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    const uploadFilePath = path.resolve(__dirname, '..', '..', 'uploads', 'merged.txt');
    const backupFilePath = path.resolve(__dirname, '..', '..', 'backups', `Text_${hour}:${min}:${sec}`);

    fs.rename(uploadFilePath, backupFilePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to move the file.' });
        } else {
            console.log('Moved')
            res.json({ message: 'File moved successfully.' });
        }
    });
}

module.exports = {
    fileupload,
    filemerge,
    filemove

};