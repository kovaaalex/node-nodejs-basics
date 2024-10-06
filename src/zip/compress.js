import {access} from 'fs/promises'
import {createGzip} from 'zlib'
import {createReadStream, createWriteStream} from 'fs'
import {pipeline} from 'stream/promises'
const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt'
    const newFilePath = 'src/zip/files/archive.gz'
    try{
        access(filePath)
        const compress = createReadStream(filePath)
        const write = createWriteStream(newFilePath)
        const gzib = createGzip()
        await pipeline(compress, gzib, write)
    } catch(error) {
        console.error(error.message)
    }
};

await compress();