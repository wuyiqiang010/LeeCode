/*
*
反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*
* */


function reverseList(head) {
    var headptr=heade;
    while(headptr.next!=null){
        var second=headerptr;
        while(second.next!=null){
            if(second.val<second.next.val){
                // 交换数据
            }
            secondptr=secondptr.next;
        }
        headerptr=headerptr.next;
    }

}