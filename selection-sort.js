

function selectionSort(arr) {

  // Copy the original array
  let copy = [...arr]
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(copy.length){
    // let minInd = 0;
    // let minVal = copy[0]
    let [minInd, minVal] = [0, copy[0]];
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted arr
    for(let i = 1; i < copy.length; i++){
      if(copy[i] < copy[minInd]){
        // minInd = i
        // minVal = copy[i]
        [minInd, minVal] = [i, copy[i]]
      }
    }

    // Save and remove the value at the min index
    sorted.push(minVal)
    copy[minInd] = copy[copy.length - 1];
    copy.pop();
    // Add the min value to the end of the sorted array
  }
  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length){
    // Do not move this console.log
    console.log(arr.join(","));
    let minInd = divider;
    let minVal = arr[divider]

    // Find the index of the minimum value in the unsorted half
    for(let i = divider; i < arr.length; i++){
    // Save the min value
      if(arr[i] < minVal){
        minInd = i;
        minVal = arr[i];
      }
    }

    // Shift every unsorted value to the left of the min value, to the right by 1
    for(let i = minInd; i > divider; i--){
      arr[i] = arr[i-1]
    }
    // Put the min value at the divider
    arr[divider] = minVal;

    // Increment the divider and repeat
    divider++;
  }
  console.log("END:", arr)
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
