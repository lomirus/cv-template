import { mkdir, access } from 'node:fs/promises'
import { exit } from 'node:process';
import puppeteer from "puppeteer";
import { createServer } from 'vite'

import compile from './compile.js';

const PORT = 5173;

async function exists(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

console.log('(1/4) Compiling template...')
await compile();

console.log('(2/4) Creating the server...')
const server = await createServer({
    server: { port: PORT }
});
await server.listen();

console.log('(3/4) Launching the puppeteer...')
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${PORT}`);
await page.emulateMediaType('screen')

console.log('(4/4) Printing PDF file...')
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
