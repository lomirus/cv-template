import { watch } from 'node:fs/promises'
import compile from './compile.js';

let isChanged = false;

setInterval(() => {
    if (isChanged) {
        compile()
        isChanged = false;
    }
}, 200)

const events = watch('./template/')

for await (const _ of events) {
    isChanged = true
}

