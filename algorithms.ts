const array = [
  21, 92, 46, 100, 3, 74, 47, 35, 50, 17, 45, 14, 56, 48, 31, 82, 75, 28, 4, 27,
  8, 64, 78, 19, 44, 30, 90, 72, 86, 20, 83, 87, 12, 65, 1, 42, 81, 40, 91, 13,
  23, 96, 84, 98, 15, 24, 16, 66, 22, 49, 38, 5, 51, 69, 33, 39, 11, 62, 26, 61,
  76, 88, 70, 54, 55, 79, 68, 2, 71, 99, 73, 25, 18, 60, 93, 53, 97, 52, 57, 58,
  77, 89, 67, 95, 85, 9, 37, 29, 34, 7, 10, 43, 63, 41, 36, 32, 94, 59, 6, 80,
];

function insertionSort(arr: number[]) {
  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    const currentValue = arr[currentIndex];
    let lookbackIndex = currentIndex - 1;
    while (lookbackIndex >= 0) {
      const lookbackValue = arr[lookbackIndex];
      if (lookbackValue > currentValue) {
        arr[lookbackIndex] = currentValue;
        arr[lookbackIndex + 1] = lookbackValue;
      }
      lookbackIndex -= 1;
    }
  }
  console.log("Insertion sort yields:", arr);
}

//insertionSort(array);

function selectionSort(arr: number[]) {
  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    let currentMinimum = arr[currentIndex];
    let minimumIndex = currentIndex;
    for (
      let lookForwardIndex = currentIndex + 1;
      lookForwardIndex < arr.length;
      lookForwardIndex++
    ) {
      if (currentMinimum > arr[lookForwardIndex]) {
        currentMinimum = arr[lookForwardIndex];
        minimumIndex = lookForwardIndex;
      }
    }
    arr[minimumIndex] = arr[currentIndex];
    arr[currentIndex] = currentMinimum;
  }
  console.log("Selection sort yields:", arr);
}

selectionSort(array);
