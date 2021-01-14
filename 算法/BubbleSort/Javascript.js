/*
* function:冒泡排序
*
* */

var arr=[12,34,1,3,5,6,7,3,4,56,34,0,0,1,2,223,3]


function BubbleSort(array,flags) {
	//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	for (let i=0;i<array.length;i++){
		for (let j=i+1;j<array.length;j++){
			if(flags?array[i]<array[j]:array[i]>array[j]){
				array[i]=array[i]^array[j]
				array[j]=array[i]^array[j]
				array[i]=array[i]^array[j]
			}
		}
	}
	return array
}

console.log(BubbleSort(arr,true))