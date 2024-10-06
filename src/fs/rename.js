import {access, rename as rn} from 'fs/promises'
const rename = async () => {
    const filePath = 'src/fs/files/wrongFilename.txt'
    const newFilePath = 'src/fs/files/properFilename.md'
    try {
        access(filePath)
        rn(filePath, newFilePath)
        throw new Error('FS operation failed')
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.error(error)
        }
    }
};

await rename();