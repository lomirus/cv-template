import { readFile, writeFile } from 'node:fs/promises'

export default async function compile() {
    const content = await readFile('./template/content.md', 'utf-8');
    const info = await readFile('./template/info.jsonc', 'utf-8');

    await writeFile(
        './src/_template.ts',
        `export const info = ${info};\n\nexport const content = \`${content}\``
    )
}