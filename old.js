let numbers = [];

function split(x, n) {
   if (x < n) document.write("-1 ");
   else if (x % n == 0) {
      for (let i = 0; i < n; i++) document.write(x / n + " ");
   } else {
      let zp = n - (x % n);
      let pp = Math.floor(x / n);
      for (let i = 0; i < n; i++) {
         if (i >= zp) {
            numbers.push(pp + 1);
         } else {
            numbers.push(pp);
         }
      }
   }
}