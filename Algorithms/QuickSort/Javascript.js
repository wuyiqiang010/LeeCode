/*
* function:快速排序
* */
//12,4,1,3,5,6,7,3,34,56,34
var arr=[12,12,34,1,12,3,1,45,58,100,99,7,0,5,6,7,3,4,3,56,34,45,6,7,8,9,56]

//console.log(InsertionSort(arr,0,arr.length-1))
function QuickSort(array,lefts,rights) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	//设置head指针tail指针
	//首先得到需要进行排序的次数
	let left=lefts;
	let right=rights;
	let middle
	if(left<right){
		//分区
		middle=partion(array,left,right)
		//左边排序
		QuickSort(array,left,middle)
		//右边排序
		QuickSort(array,middle+1,right)
	}
	return array
}

//分区函数
function partion(array,left,right){
	//设定基准值
	let basevalue=array[left]
	//将左边大于basevalue的值和右边小于basevalue的值互换
	let i=left+1
	let j=right
	let index
	for (let k=i;k<=right;k++){
		if(array[k]>basevalue){
			//交换值
			let tmp
			tmp=array[i]
			array[i]=array[j]
			array[j]=tmp
		}
		index=k
	}

	//将索引为K的值和basevalue互换
	let tmp
	tmp=array[index]
	array[index]=array[left]
	array[left]=tmp

	return index
}


console.log(QuickSort(arr,0,arr.length-1))