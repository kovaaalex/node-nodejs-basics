import {access, readFile} from 'fs/promises'
const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt'
    try{
        await access(filePath)
        let text = await readFile(filePath, 'utf-8')
        console.log(text)
    }
    catch(error){
        if(error.code === 'ENOENT'){
            console.error('FS operation failed')
        }
        else console.error('FS operation failed')
    }
};

await read();