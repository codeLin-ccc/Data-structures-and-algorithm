const obj  = {
  numberArray: [1,2],
  stringArray: [''],
}

function fn(obj) {
  const newObj = {}
 for (let [key, value] of Object.entries(obj)) {
    const newkey = key.replace(key[0],key[0].toLocaleUpperCase())
    newObj[newkey] = value;
 }
 return newObj
}
fn(obj)