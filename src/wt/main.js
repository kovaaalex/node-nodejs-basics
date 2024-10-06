import access from 'fs/promises'
import { availableParallelism  } from 'os'
import { Worker } from 'worker_threads'
const performCalculations = async () => {
    const filePath = 'src/wt/worker.js'
    try {
        await access(filePath)
        const numberCores = availableParallelism()
        const workers = []
        const createWorker = (data) => {
            return new Promise((resolve) => {
                const worker = new Worker(workerFile, {workerData: data})
                worker.on('message', (data) => resolve({status: 'resolved', data}))
                worker.on('error', () => resolve({status: 'error', data: null}))
            })
        }
        for (let i = 0; i < numberCores; i++)
            workers.push(createWorker(i + 10))
        const result = await Promise.all(workers)
        console.log(result)
    } catch(error) {
        console.error(error.message)
    }
};

await performCalculations();