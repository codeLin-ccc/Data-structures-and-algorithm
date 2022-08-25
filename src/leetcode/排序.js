// 冒泡排序
function maoPao(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let c = array[j];
        array[j] = array[j + 1];
        array[j + 1] = c;
      }
    }
  }
  return array
}
let reslut = maoPao([3, 1, 5, 6, 4, 9, 7, 2, 8])

// 快速
// 先假定数组中的第 0 个就是最小的数字的索引

// 然后遍历数组，只要有一个数字比我小，那么就替换之前记录的索引

// 直到数组遍历结束后，就能找到最小的那个索引，然后让最小的索引换到第 0 个的位置

// 再来第二趟遍历，假定第 1 个是最小的数字的索引

// 在遍历一次数组，找到比我小的那个数字的索引

// 遍历结束后换个位置

// 依次类推，也可以把数组排序好
function kuaisu(array) {

  for (let j = 0; j < array.length; j++) {
    let min = j; // 假定最小
    for (let i = j + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i
      }
    }
    let c = array[j];
    array[j] = array[min];
    array[min] = c;
  }
  return array
}

reslut = kuaisu([3, 1, 5, 6, 4, 9, 7, 2, 8])


function quickSort(array) {
  if(array.length < 1) return array; // 递归出口
  let left = []
  let right = []
  let midIndex = parseInt(array.length / 2)
  let mid = array[midIndex]
  for (let i = 0; i < array.length; i++) {
    if(array[i] === mid) {
      continue;
    }
    if(array[i] < mid) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}
reslut = quickSort([3, 1, 5, 6, 4, 9, 7, 2, 8])

// console.log(reslut);
function ahsdfas(params) {
  console.log(this);
}
ahsdfas()
// console.log(ahsdfas());