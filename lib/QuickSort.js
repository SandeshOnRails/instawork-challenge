class QuickSort {

    constructor(){}

    quickSort(arr, left, right){

        return new Promise((res, rej)=>{
            let pivot,
            partitionIndex;
            
           if (left < right) {
             pivot = right;
             partitionIndex = this.partition(arr, pivot, left, right);
             
             this.quickSort(arr, left, partitionIndex - 1);
             this.quickSort(arr, partitionIndex + 1, right);
           }
           res(arr)
        })
        
     }

     partition(arr, pivot, left, right) {
        let pivotValue = this.resolvePrice(arr[pivot]),
        partitionIndex = left;
     
        for(let i = left; i < right; i++){
         if(this.resolvePrice(arr[i]) < pivotValue){
           this.swap(arr, i, partitionIndex);
           partitionIndex++;
         }
       }
       this.swap(arr, right, partitionIndex);
       return partitionIndex;
     }

     swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
     }
     
     resolvePrice(obj) {
         return Number(obj.price.replace('$', ''))
     }
}
module.exports = QuickSort