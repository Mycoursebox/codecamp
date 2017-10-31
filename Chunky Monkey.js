function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var newSubArr = [];

    for (i = 0; i < arr.length / size; i++) {
        newSubArr = arr.slice(size * i, size * i + size);
        newArr.push(newSubArr);
    }

    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
