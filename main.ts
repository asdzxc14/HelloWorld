var n : number = 8;

function print(n : number):void {
    var i:number =0;
    var j:number =0;
    var s:string ="";
    for(i=1;i<=n;i++){
        s="";
        for(j=0;j<n-i;j++){
            s+=" ";
        }
        for(j=0;j<2*i-1;j++){
            s+="*";
        }
        console.log(s);
    }
}
print(n);