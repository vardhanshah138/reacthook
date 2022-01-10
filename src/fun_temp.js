function tocel(f){
    const rounded = parseFloat(f);
    return ((rounded - 32) * 5 / 9).toFixed(2);
}

function tofar(c){
    const rounded = parseFloat(c);
    return ((c * 9 / 5) + 32).toFixed(2);
}
