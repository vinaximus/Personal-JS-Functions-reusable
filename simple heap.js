let ar=[ 6, 7, 5, 6, 5, 2, 5, 9, 7, 7, 6, 10, 3, 4, 10, 4, 3 ];
let mh=new MinHeap();
for (let val of ar) mh.push(val);



while (mh.size()>0) console.log(mh.pull());


console.log(mh.values());


function MinHeap() {
    var arr=[];

    this.push=function(val) {
        arr.push(val);
        let i=arr.length-1;
        let pi; // parent index
        while (i>0) {
            pi=Math.floor((i-1)/2);
            if (arr[i]<arr[pi]) [arr[i],arr[pi]]=[arr[pi],arr[i]];
            else break;
            i=pi;
        }
    }

    this.pull=function () {
        let n=arr.length-1;
        if (n==-1) return null;
        [arr[0],arr[n]]=[arr[n],arr[0]];
        let i=0;

        
        while (true) {
            let l=2*i+1;
            let r=2*i+2;
            let min;
            if (l>=n && r>=n) break;
            if (r<=n-1 && arr[r]<arr[l]) min=r;
            else min=l;
            if (arr[i]>arr[min]) [arr[i],arr[min]]=[arr[min],arr[i]];
            else break;
            i=min;
        }
        return arr.pop();
    }

    this.size=()=>arr.length;
    this.values=()=>{return arr;}
}