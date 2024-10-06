import { createReadStream } from 'fs'
import { access } from 'fs/promises'
const read = async () => {
    const filePath = 'src/streams/files/fileToRead.txt'
    try {
        await access(filePath)
        const readableStream = createReadStream(filePath, { encoding: 'utf-8' })
        readableStream.pipe(process.stdout)
    } catch (error) {
        console.error(error)
    }
};

await read();