
import { readFile, writeFile, access, mkdir, copyFile } from 'node:fs/promises'

export default async function compile() {
    const content = await readFile('./template/content.md', 'utf-8');
    const info = await readFile('./template/info.jsonc', 'utf-8');

    try {
        await access('./src/assets')
    } catch {
        mkdir('./src/assets')
    }

    const avatar = JSON.parse(info.replace(/\/\/.*/g, '')).avatar;
    if (typeof avatar === 'string') {
        await copyFile(`./template/${avatar}`, `./src/assets/${avatar}`);
        await writeFile(
            './src/assets/avatar.ts',
            `export const USE_AVATAR = true;\nexport { default as avatar } from "./${avatar}";`
        )
    } else {
        await writeFile(
            './src/assets/avatar.ts',
            `export const USE_AVATAR = false;\nexport const avatar = undefined`
        )
    }

    await writeFile(
        './src/_template.ts',
        `export const info = ${info};\n\nexport const content = \`${content}\``
    )
}