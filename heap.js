// Classes and Functions
function nodeExtended(llNode,x,y) {
    this.node=llNode;
    this.x=x;
    this.y=y;
}

class heapNode {
    node;
    value;
    constructor(obj,val) {
        this.node=obj;
        this.value=val;
    }
}

class heap {
    constructor() {
        this.heapArr=[];
    }

    push (obj,val) {
        let node=new heapNode(obj,val);
        this.heapArr.push(node);
        let i=this.heapArr.length-1;
        while (i>0) {
            //Get index of parent
            let parentIndex;
            if (i%2==1) parentIndex=Math.ceil((i-1)/2); // Left child (i-1)/2
            else parentIndex=Math.ceil((i-2)/2);
            // Swap if required
            if (this.heapArr[parentIndex].value>this.heapArr[i].value) {
                [this.heapArr[parentIndex],this.heapArr[i]]=[this.heapArr[i],this.heapArr[parentIndex]];
                i=parentIndex;
            } else {
                break;
            }
        }
        
    }

    pull () {
        // Returns the heapnode with minimum value 
        if (this.heapArr.length==0) return null;
        let min=this.heapArr[0];
        
        let i=0;
        let n=this.heapArr.length-1;

        // Swap first with last;
        [this.heapArr[i],this.heapArr[n]]=[this.heapArr[n],this.heapArr[i]];

        while (true) {
            // Get right child index if its present or left if right is not present
            let l=2*i+1;
            let r=2*i+2;
            if (r>=n && l>=n) break;

            let minIndex;
            if (r<=n-1 && this.heapArr[r].value<this.heapArr[l].value) minIndex=r;
            else minIndex=l;

            if (this.heapArr[i].value>this.heapArr[minIndex].value) {
                // Do the Swap
                [this.heapArr[i],this.heapArr[minIndex]]=[this.heapArr[minIndex],this.heapArr[i]];
                i=minIndex;
            } else {
                break;
            }
            
        }
        this.heapArr.pop();
        return min;
    }    
}


let hp=new heap();
let dum={fL:0};
hp.push(dum,1);
hp.push(dum,10);
hp.push(dum,20);
hp.push(dum,4);
hp.push(dum,11);
hp.push(dum,13);
hp.push(dum,3);
hp.push(dum,8);
hp.push(dum,9);

for (let i=0;i<9;i++) console.log(hp.pull().value);


