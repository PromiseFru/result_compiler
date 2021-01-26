const fs = require('fs');
const PDFParser = require('pdf2json');

let pdfParser = new PDFParser(this,1);

pdfParser.on('pdfParser_dataError', (err) => {
    console.log(err);
});

pdfParser.on('pdfParser_dataReady', (data) => {
    fs.writeFile(__dirname + '/test.txt', pdfParser.getRawTextContent(), (err) => {
        if (err) {
            console.log(err)
        }
        console.log("done")
    })
})

pdfParser.loadPDF(__dirname + '/test.pdf');