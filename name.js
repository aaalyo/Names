import {accessSync, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const filePath = `${process.cwd()}/name.json`;

const storeData = (name) => {
try {
    const jsonObject = readFileSync(filePath, 'utf8');
        const decoded = JSON.parse(jsonObject);
        decoded.name = name;
        writeFileSync(filePath, JSON.stringify(decoded));
        console.log(`The name is ${decoded.name} now`);
} catch (err) {
    console.error('Something wrong. The error is: ');
    console.error(err);
};
};

const jsonObject = readFileSync(filePath, 'utf8');
const decoded = JSON.parse(jsonObject);
console.log(`The current name was: ${decoded.name}`);
rl.question('Please enter a name: ', (answer) => {
        
    storeData(answer);
    rl.close();
});



