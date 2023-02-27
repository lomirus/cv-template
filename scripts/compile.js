import { readFile, writeFile } from 'node:fs/promises'

export default async function compile() {
    const content = await readFile('./template/cv.md', 'utf-8');
    const info = JSON.parse(await readFile('./template/info.json', 'utf-8'));

    await writeFile(
        './src/_template.ts',
        `export default ${JSON.stringify({ info, content })}`
    )
}