//Objective
//In this challenge, we learn about Arrays. Check out the attached tutorial for more details.
//Function Description
//Complete the getSecondLargest function in the editor below.
//getSecondLargest has the following parameters:
//int nums[n]: an array of integers
//Returns
//int: the second largest number in nums.

nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
  // Complete the function
  let ordArray = nums.sort((a, b) => b - a);
  let long = nums.length;
  let secondBiggest = 0;
  for (let i = 0; i < long; i++) {
    if (ordArray[i] > ordArray[i + 1]) {
      secondBiggest = ordArray[i + 1];
      break;
    }
  }
  return secondBiggest;
}

getSecondLargest(nums);
