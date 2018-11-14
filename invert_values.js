// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.


const invert = array => {
  return array.map(num =>
    (num === 0) ? num : -num
  )
}

//different solution

function invert(array) {
   return array.map(i => 0 - i);
}
