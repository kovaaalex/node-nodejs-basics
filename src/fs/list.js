import {access, readdir} from 'fs/promises'
const list = async () => {
    const folder = 'src/fs/files'
    try {
        access(folder)
        const files = await readdir(folder)
        console.log(files)
    } catch (error) {
        if(error.code === 'ENOENT')
            console.error('FS operation failed')
    }
};

await list();