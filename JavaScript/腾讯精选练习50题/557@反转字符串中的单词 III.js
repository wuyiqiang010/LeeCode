/*
* 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

示例：

输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
 

提示：
在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

*
* */


function reverseWords(s) {
var arr=new Array()
         var font=0
        if(s.length===0){
        return s
        }
        for (let i=0;i<=s.length;i++){
            if (s[i]===" " ||s[i]==null){
                   let less=i-1
                    //循环
                    for (let j=font, k=less;j<=k;j++,k--){
                        //交换值
                        arr[j]=s[k]
                        arr[k]=s[j]
                        if (i!=s.length){
                            arr.push(" ")
                        }
                        /*s[k]=s[k]^s[j]
                        s[j]=s[k]^s[j]
                        s[k]=s[k]^s[j]*/
                    }
                    font=i+1
            }
        }
        var tmp=arr.join("")
        //alert(tmp)
            return  tmp
}