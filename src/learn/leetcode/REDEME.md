## 时间复杂度
时间复杂度的时间量级单位有哪些？
O(1) < O(logN) < O(N) < O(NlogN) < O(N^2)

用大O表示法来表示某一算法的时间复杂度。

### O(1)示例
所有未达到n级的时间复杂度都可以视作1，尽管test里面可能还含有很多步操作，但都是可以计数数出来的，十几步和几步对于计算机来说都是1。
>>>
  function test(){
    let a = 1;
    let b = 1;
    console.log(a + b)
    console.log('dx, 18')
    ...
    return a + b;
  }
>>>

### O(logN)示例
logN 通常是指以2为底的对数。
有一种算法是，将10进制转为2进制，对2不断求余

function tenToBinary(n){
	let result = ''
	while(Math.floor(n / 2) !== 0 && n % 2 !== 0) {
		result += n % 2
		n = Math.floor(n / 2)
	}
	return result.split('').reverse().join('') 
}

### O(N)示例
达到n级但没有形成n级里面再n级的嵌套，都可以视作n级。
有一种排序算法，计数排序，我用对象进行计数排序，整个算法执行了n+m次，但对于大O表示法而言，n+m 可以视作2n，因为n和m都没法确定嘛，所以一个未知的数n乘以2仍然是一个未知的数，所以用大O表示法，仍然是O(n)。

function countingSort(arr) {
  const bucket = {};
  let countIndex = 0;

// 这里循环了n次
  for (let i = 0; i < arr.length; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 1;
    } else {
      bucket[arr[i]] += 1;
    }
  }
// 这里循环了m次
  for (let j in bucket) {
    if(bucket.hasOwnProperty(j)) {
      while (bucket[j] > 0) {
        arr[countIndex] = Number(j);
        countIndex++;
        bucket[j]--;
      }
    }
  }
}

### O(NlogN)示例
这个test函数实现了循环嵌套，外层循环n次内层循环logn次，所以是nlogn

function test(n) {
	// 外层实现n次
	for(let i = 0; i < n.length; i++) {
		// 内层实现logn次
		for(let j = n.length - 1; j >= 0; j = Math.floor( j / 2)) {
			console.log(n[j])
		}
	}
}

### O(N^2)示例
在排序算法中，用冒泡排序的时间复杂度就是O(N^2)，同样是一个循环嵌套，外层循环n次，内层同样循环n次

function bubbleSort ( data ) {
    var temp = 0;
    for ( var i = data.length ; i > 0 ; i -- ){
        for( var j = 0 ; j < i - 1 ; j++){
           if( data[j] > data[j + 1] ){
               temp = data[j];
               data[j] = data [j+1];
               data[j+1] = temp;
           }
        }
    }
    return data;
}

## 空间复杂度
算法常用牺牲空间复杂度的方式，保全时间复杂度。所以空间复杂度没那么重要，但为了更佳的性能体验和代码优化，我们也应该学习空间复杂度的相关知识。

O(1) < O(N) < O(NM) < O(NMK…)

在一个函数中，保存的变量如果是基本类型（字符串，数字，布尔值等），只要没有对象或者数组（也是对象）出现，那么就可以认为是O(1)的复杂度。

正常的一维数组，认为其空间复杂度是O(N)
二维数组，认为其空间复杂度是O(NM)
当然，数组的子元素可以是另外一个数组，这样嵌套下去，可以认为其空间复杂度是O(NMK…)

#### 说一两个节省空间复杂度的常用处理方式。
- 在递归的时候采用尾递归的方式，求1到n的整数和

function sum(all, n) {
	if(n === 1) {
		return all + 1
	}
	return sum(all + n, n - 1)
}

- 交换两个变量，不用第三个变量进行暂存。
a = a + b;
b = a - b;
a = a - b; 

[a, b] = [b, a]