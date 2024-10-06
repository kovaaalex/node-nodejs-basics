import { createReadStream } from 'fs';
import { createHash } from 'crypto'
const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt'
    try{
        const stream = createReadStream(filePath)
        const hash = createHash('sha256')
        stream.on('data', (e) => {
            hash.update(e)
        })
        stream.on('end', () => {
            const hexHash = hash.digest('hex')
            console.log(`SHA256 Hash: ${hexHash}`)
        })
        stream.on('error', (error) => {
            console.error(error)
        })
    } catch (error) {
        console.error('FS operation failed:', error.message);
    }
};

await calculateHash();