/*
*给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。


示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。


示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*
* */

//version One:TimeOut(origin version)
function maxProduct(nums) {
    if(nums.length==1) return nums
    var len=nums.length-1
    var arr=nums
    for (let head=0;head<len;head++){
      for (let tail=len;tail>head;tail--){
            //计算集合中的乘积
            let sum=1
            for (let i=head;i<=tail;i++){
                  sum*=nums[i]
            }
            arr.push(sum)
      }
    }
    //get min number
    //遍历数组
    var ptr=0
    var tmp=0
    while (ptr<arr.length){
      if(arr[ptr]>tmp){
        tmp=arr[ptr]
      }
      ptr++
    }
return tmp
}

//version Two:
