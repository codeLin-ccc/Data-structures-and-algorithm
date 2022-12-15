// 实现一个useMemo




// 防抖节流
function fn1(fn, time) {
  let timer = null;
  return function () {
    console.log(time);
    const content = this;
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(content)
    }, time)
  }
}

function fn2(fn, time) {
  let timer = null;
  return function () {
    const content = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(content);
      }, time)
    }
  }
}
