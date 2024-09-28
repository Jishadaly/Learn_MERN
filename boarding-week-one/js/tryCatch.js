function asynchronesFun(condition){
    try {
        if (condition) {
            throw Error('hey')
        }
    } catch (error) {
        console.log(error);
    }finally{
        console.log("ima finally");
    }
}

console.log(asynchronesFun(true));
