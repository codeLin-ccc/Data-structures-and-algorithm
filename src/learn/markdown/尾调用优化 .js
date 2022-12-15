
function f(x){ 
    return g(x); 
}
function f() {
    let m = 1; 
    let n = 2; 
    return g(m + n); 
} 

function factorial(n) { 
    if (n === 1) return 1; 
    return n * factorial(n - 1); 
} 
factorial(5) // 120

function factorial(n, total) { 
    if (n === 1) return total; 
    return factorial(n - 1, n * total); 
} 
factorial(5, 1) // 120