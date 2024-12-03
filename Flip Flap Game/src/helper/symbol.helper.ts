const symbols = [
    '🍇',
    '🍉',
    '🚗',
    '🍌',
    '🏠',
    '🥭',
    '🍎',
    '🐯',
    '🍒',
    '🍓',
    '🐵',
    '🥝',
    '🍿',
    '🏀',
    '🎱',
    '🐻',
    '🍜',
    '🍢',
    '🎓',
    '🍤',
    '🦀',
    '🍦',
    '🍩',
    '🎂',
    '🍫',
    '🍭',
    '🍼',
    '🪔',
    '🍺',
    '🐱',
    '🐶',
  ];

 export const getRandomSymbol=(n=8,shouldBeUnique=false)=>{
     const mySymbol:string[]=[];
     const set=new Set()
     for(let i=0;i<n;){
        const randomPosition=Math.floor(Math.random()*symbols.length)
        if(shouldBeUnique && set.has(randomPosition)){
            continue;
        }
        mySymbol.push(symbols[randomPosition]);
        set.add(randomPosition)
        i++;
        
     }
     return mySymbol;

  }

export  const getSuffledArray=<T>(items:T[]):T[]=>{
   const n=items.length;
  for(let i=0;i<n;i++){
      const randomPos=Math.floor(Math.random()*(n-1));

      let temp=items[n-i-1];
      items[n-i-1]=items[randomPos];
      items[randomPos]=temp;

  }
     return items;
  }

 export const getSuffledSymbol=(n=8,shouldBeUnique=false):string[]=>{
        const randomSymbol=getRandomSymbol(n,shouldBeUnique);
        const doubleSymbol=randomSymbol.concat(randomSymbol);
        return getSuffledArray(doubleSymbol)
  }