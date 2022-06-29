const fs = require("fs");
var MarkdownIt = require('markdown-it');

const patternFolders = fs.readdirSync("../patterns/")
const contentJson = {}
const md = new MarkdownIt();
patternFolders.forEach(folder=>{
    console.log(folder);
    const readme = fs.readFileSync(`../patterns/${folder}/README.md`, "utf-8")
    console.log(readme);
    const result = md.parse(readme);
    console.log(result);
    contentJson[folder] = {
        "name": folder,
        "title": folder,
        "readme-str": readme,
        "result-obj": result
    }
})
