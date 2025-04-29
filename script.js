function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  let curr = [];
  while (left <= right) {
    curr[left] = s[right];
    curr[right] = s[left];
    left++;
    right--;
  }
  s = curr.join("");
  return s;
}

const a = reverseString("hello");
console.log(a);
