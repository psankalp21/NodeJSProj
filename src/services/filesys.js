const { func } = require("joi");

function upload(req, res) {
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
            res.send(data);
        }
    });

    fs.readFile(`${__dirname}/../../uploads/` + 'sample2.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            res.send(data)
            console.log('Content of uploaded files are :', data);
        }
    });
}


function merge(req, res) {

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
    else
    {
        res.send("Invalid file name")
        console.log("File not found")
    }
}


module.exports = {
    upload,
    merge
}