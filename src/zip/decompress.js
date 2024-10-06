import {access} from 'fs/promises'
import {createReadStream, createWriteStream} from 'fs'
import {createUnzip} from 'zlib'
import {pipeline} from 'stream/promises'
const decompress = async () => {
    const filePath = 'src/zip/files/archive.gz'
    const newFilePath = 'src/zip/files/fileToCompress.txt'
    try {
        access(filePath)
        const readStr = createReadStream(filePath)
        const writeStr = createWriteStream(newFilePath)
        const unzip = createUnzip()
        await pipeline(readStr, unzip, writeStr)
    }catch(error) {
        console.error(error.message)
    }
};

await decompress();