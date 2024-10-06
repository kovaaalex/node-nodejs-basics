const parseArgs = () => {
    const args = process.argv.slice(2)
    const modidiedArguments = args.map(arg => arg.replace("--", ""))
    console.log(modidiedArguments)
    for(let i = 0; i < modidiedArguments.length; i += 2) {
        console.log(modidiedArguments[i], 'is', modidiedArguments[i + 1])
    }
};

parseArgs();