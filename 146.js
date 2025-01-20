let map = new Map([
    ['name', 'Sanju'],
    ['class', 12],
    ['subject', 'Math']
  ]);
  
  console.log('Before deletion:', map);
  map.delete('class');
  
  console.log('After deletion:', map);
  