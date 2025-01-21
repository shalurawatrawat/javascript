export let add=(a,b)=>{
    return a+b;
}

export let sub=(a,b)=>{
    return a-b;
}

export let calculateRectangle=(width, height)=>{
    let area=width*height;
    let perimeter=2*(width+height); 
    return {area,perimeter}
}

export let calculateSquare=(side)=> {
    const area = side * side;
    const perimeter = 4 * side;
    return { area, perimeter };
  }