import { readFile } from 'fs/promises'

export const getApi = async () => {
    try {
        return JSON.parse(
            await readFile(`${__dirname}/../../data/api.json`, 'utf8')
        )
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}
