/*
* function:插入排序
* */

var arr=[12,34,1,3,5,6,7,3,4,56,34,0,0,1,2,223,3]
function InsertionSort(arr,flags) {
		//array表示需要进行排序的数组，flags表示控制位，true表示降序排列，false表示升序排列
	for (let i=1;i<arr.length;i++){
		if(arr[i]>arr[i-1]){
			for (let j=i;j>=0;j++){
				if(arr[i]<arr[j]){
					//往后移动元素
					for (let t=j;t>i;t--){
						arr[t]=arr[j]
					}
				}
			}
		}

	}

	return arr
}

console.log(InsertionSort(arr,true))