class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var arr = this.arr;
    var arr_new = [];
    for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < indices.length; j++){
      if(indices[j] == i){
        arr_new.push(arr[i]);
      }
    }
  }
  function Num(a, b){
    if (a > b) return 1;
    if (a < b) return -1;
}
  arr_new.sort(Num);
  for (var i=0; i<indices.length;i++){
    arr[indices[i]]=arr_new[i];
}
return arr;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;
