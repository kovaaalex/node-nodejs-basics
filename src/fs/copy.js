import { access, cp } from 'fs/promises'
const copy = async () => {
    const folder = 'src/fs/files'
    const newFolder = 'src/fs/files_copy'
    try {
        await access(folder)
        try {
            await access(newFolder)
            throw new Error('FS operation failed')
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error
            }
        }
        cp(folder, newFolder)
        console.log(`Файлы успешно скопированы из ${folder} в ${newFolder}`)
    } catch (error) {
        console.error('FS operation failed:', error.message)
        throw error
    }
}
await copy()
