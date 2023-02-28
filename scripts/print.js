import { mkdir, access } from 'node:fs/promises'
import { exit } from 'node:process';
import puppeteer from "puppeteer";
import { createServer } from 'vite'

const PORT = 5173;

async function exists(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

const server = await createServer({
    server: {
        port: PORT
    }
});
console.log('(1/3) Creating the server...')
await server.listen();

console.log('(2/3) Launching the puppeteer...')
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${PORT}`);
await page.emulateMediaType('screen')

console.log('(3/3) Printing PDF file...')
if (!(await exists('target'))) {
    await mkdir('target');
}
await page.pdf({
    path: 'target/cv.pdf',
    printBackground: true,
    format: 'A4'
})

console.log('Finished Print: "./target/cv.pdf"')
exit()