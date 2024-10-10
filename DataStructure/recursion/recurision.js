function palindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    return palindrome(str.slice(1, -1))
}
// console.log(palindrome('atwwa'));

function fibnacci(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

    return fibnacci(n - 1) + fibnacci(n - 2)
}
console.log(fibnacci(10));  