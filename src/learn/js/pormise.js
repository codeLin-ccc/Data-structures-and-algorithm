/* async function fn() {
  console.log('1');
  await Promise.resolve(1).then(() => {
    console.log('5');
    return Promise.resolve('第二个').then((val) => {
      console.log(val);
    })
  })

  await setTimeout(() => {
    console.log('4');
  }, 100)
  console.log('3');
  await Promise.resolve(1).then(() => {
    console.log('6');
  })
  console.log('55');
}
fn()
setTimeout(() => {
  console.log('566');
}, 100)
console.log('2'); */
// 1 2 5 VAL 3 6 55  4 566

// 实现一个sleep
/* async function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay))
}
async function foo() {
  const t0 = Date.now()
  console.log(t0);
  await sleep(5000);
  console.log(Date.now() - t0);
}
// foo(); */

async function randomDelay(id) {
  const delay = Math.random() * 1000;
  return new Promise(resolve => setTimeout(()=> {
    console.log(`${id} 完成`);
    resolve();
  }, delay))
}
async function foo() {
  const t0 = Date.now();
  // 就算这些期约之间没有依赖,异步函数也会一次暂停,等待每个超时完成,这样可以保证执行顺序,但总执行时间会延长
  /* await randomDelay(0);
  await randomDelay(1);
  await randomDelay(2);
  await randomDelay(3);
  await randomDelay(4); */
  // 用for 循环重写
  for (let i = 0; i < 5; i++) {
    await randomDelay(i) 
  }
  console.log(Date.now() - t0);
}
foo()