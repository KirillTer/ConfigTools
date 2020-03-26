let zipFolder = require('zip-folder');
let args = require('yargs').argv;

let mainVersion = args.releaseversion || "1.0.0";
let buildVersion = args.buildversion || "99";

// Create folder if it doesn't already exist
const fs = require('fs');
let path = require('path');
let folder = path.join(__dirname,"../dist/");
if(!fs.existsSync(folder))
    fs.mkdirSync(folder, { recursive: true });

zipFolder('./build', `./dist/back-office-system-${mainVersion}-${buildVersion}.zip`, (err)=>{
    if(err)
        throw err;
});

let DependencyPOM = require('./dependency-pom');

let fullVersion = mainVersion + '-' + buildVersion;

buildPOM().then((pom)=>{
    fs.writeFileSync(folder + `/back-office-system-${fullVersion}.pom`, pom.toPrettyString());
    fs.writeFileSync(folder + `/pom.xml`, pom.toPrettyString());
});

async function buildPOM()
{
    let pom = new DependencyPOM(fullVersion,'com.virtuefusion.html', 'back-office-system');

    return pom;
}

