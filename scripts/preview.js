import { watch } from 'node:fs/promises'
import { createServer } from 'vite'

import compile from './compile.js';

let isChanged = true;

setInterval(() => {
    if (isChanged) {
        compile()
        isChanged = false;
    }
}, 200)

const server = await createServer();
await server.listen();
await server.printUrls();

const events = watch('./template/')
for await (const _ of events) {
    isChanged = true
}
