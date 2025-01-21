function countDown(n) {
    if (n < 0) {
      console.log('Countdown complete!');
      return;
    }
    console.log(`Time left: ${n} seconds`);
    setTimeout(()=>{
        countDown(n-1);
    },1000);
  }
  let seconds = 5;
  countDown(seconds);