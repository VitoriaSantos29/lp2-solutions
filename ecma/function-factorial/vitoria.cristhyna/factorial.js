function fac(f) {
    let fa = 1;
    for(i = 1; i<=f; i++){
    fa *= i
    }
    return fa
}

module.exports = fac