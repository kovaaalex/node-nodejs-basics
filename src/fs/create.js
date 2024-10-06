import {writeFile, access} from 'fs/promises'
const createFile = async () => {
    const filePath = 'src/fs/files/fresh.txt'
    try {
        await access(filePath)
        throw new Error('FS operation failed')
    } catch (error) {
        if(error.code === 'ENOENT'){
            writeFile(filePath, 'I am fresh and young', 'utf-8')
            console.log('File has been saved')
        }
        else console.error('FS operation failed')
    }
}
await createFile();