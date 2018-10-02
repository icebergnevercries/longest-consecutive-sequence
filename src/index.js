module.exports = function longestConsecutiveLength(array) {
  if(typeof array[0] === 'undefined'){return 0;}

  let maxLenght = 1;
  let arrayLenght = [];  
  let index = 0, ind = 0;

  array.sort(mySort);  
  
  for(let el in array){
    if(ind == 0){
      arrayLenght.push(1);
    }
    if(ind > 0 && array[ind] == array[ind - 1] + 1){
      arrayLenght[index]++;
    }        
    else if(ind > 0 && array[ind] != array[ind - 1]){
      arrayLenght.push(1);
      index++;
    }
    ind++;
  }

  for(let i = 0, len = index; i < len; i++){
    if(arrayLenght[i] > maxLenght){
      maxLenght = arrayLenght[i];
    }
  }

  return maxLenght;
}

let mySort = (a, b) => {
  if (a < b) {return -1;}
  if (a == b) {return 0;}
  if (a > b) {return 1;}
}