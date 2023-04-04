//EXERCİSE1
var uniquePaths = function (m, n) {
  let totalSteps = m - 1 + (n - 1);
  let totalStepsFactorial = 1;
  let mFactorial = 1;
  let divisionFactorial = 1;
  for (let i = 1; i <= totalSteps; i++) {
    totalStepsFactorial *= i;
  }
  for (let i = 1; i <= m - 1; i++) {
    mFactorial *= i;
  }
  for (let i = 1; i <= totalSteps - (m - 1); i++) {
    divisionFactorial *= i;
  }
  return totalStepsFactorial / (mFactorial * divisionFactorial);
};

//EXERCİSE2

var maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSum = -10001;
  if (nums.length == 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
};

//EXERCİSE3
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  if (n % 2 === 0) return myPow(x * x, n / 2);
  else return x * myPow(x, n - 1);
};

//EXERCİSE4
var trailingZeroes = function (n) {
  let counter = 0;
  if (n < 5) return 0;
  else {
    for (let i = 5; i <= n; i += 5) {
      let num = i;
      while (num % 5 === 0) {
        num /= 5;
        counter++;
      }
    }
  }
  return counter;
};

//EXERCİSE5
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    if (height[left] <= height[right]) left++;
    else right--;
  }
  return maxArea;
};

//EXERCİSE6
var canJump = function (nums) {
  let step = nums[0];
  for (let i = 1; i < nums.length; i++) {
    step--;
    if (step < 0) return false;
    if (nums[i] > step) {
      step = nums[i];
    }
  }
  return true;
};

//EXERCİSE7
var lengthOfLongestSubstring = function (s) {
  let newArray = [];
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (newArray.indexOf(s[i]) < 0) {
      newArray.push(s[i]);
      if (newArray.length > maxLength) maxLength = newArray.length;
    } else {
      newArray = newArray.slice(newArray.indexOf(s[i]) + 1, newArray.length);
      newArray.push(s[i]);
    }
  }
  return maxLength;
};
