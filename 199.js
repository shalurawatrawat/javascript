 
        let k=0,n=5;
        for(let i=1;i<n;i++){
            for(let j=1;j<n-i;j++){
                console.log(' ');
            }
            for(let j=1;j<2*i;j++){
            k=(j<=i)?++k :--k;
            console.log(k);
                
            }
            console.log();
        }
    