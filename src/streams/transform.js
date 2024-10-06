import {Transform} from 'stream'
const transform = async () => {
    const reverseTransforming = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `${chunk.toString().split('').reverse().join('')}`)
        }
    })
    process.stdin.pipe(reverseTransforming).pipe(process.stdout)
};

await transform();