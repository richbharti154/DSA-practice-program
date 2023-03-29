function MaxFre(arr) {
    let mp = new Map();
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      if (mp.has(arr[i])) {
        x = mp.get(arr[i]);
        mp.set(arr[i], x + 1);
      } else {
        mp.set(arr[i], 1);
      }
    }
    }
    console.log(MaxFre([8,9,7,6,]))