function asynchronesFun(condition){
    try {
        if (condition == false) {
            throw new Error('hey')
        }
    } catch (error) {
        console.log(error);
    }finally{
        console.log("ima finally");
    }
}

console.log(asynchronesFun(false));