import {access, unlink} from 'fs/promises'
const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt'
    try{
        await access(filePath)
        await unlink(filePath)
    } catch(error){
        if(error.code === 'ENOENT'){
            console.error('FS operation failed', filePath)
        } else {
            console.error(error.message)
        }
    }
}

await remove()