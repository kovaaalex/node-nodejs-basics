const parseEnv = () => {
    const str = process.env
    for(let substr in str) {
        if(substr.startsWith('RSS_')) console.log(`${substr}=${str[substr]}`)
    }
};

parseEnv();