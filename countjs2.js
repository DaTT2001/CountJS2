//bai th 3-1
function checkArticle(inputString) {
    if(inputString === "a" || inputString === "an" || inputString === "the") {
      return true
    }
    return false
  }
  //3.2
  function lowerCase(inputString) {
    return inputString.toLowerCase();
  }
  //3.3
  console.log(lowerCase("ACV"))
  function checkNumberEmail(inputEmail) {
    let tmp = 0;
    const arr = inputEmail.split("");
    for(let i = 0; i < arr.length; i++) {
      arr[i] = Number.parseInt(arr[i])
    }
    for(let i =0; i < arr.length; i++) {
      if(!Number.isNaN(arr[i])) {
        tmp += 1
      }
    }
    return tmp
  }
  console.log(checkNumberEmail("congdat08133302001@gmail.com"))
  //3.4.
  function upperFistString(inputString) {
    const arr = inputString.split(" ")
    for(let i = 0; i < arr.length; i++) {
      arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ")
  }
  console.log(upperFistString("tao la dat"))
  //3.5
  function dateAndTime(hour, min, day, month, year) {
    if(hour < 0 || hour > 23 || min < 0 || min > 59 || day < 1 || day > 31 || month < 0 || month > 12 || year < 0) {
      return undefined
    }
    else {
      return `${hour}:${min} ${day}/${month}/${year}`
    }
  }
  dateAndTime(6,30,1,10,2901)
  console.log(dateAndTime(9,50,1,10,2901))
  //bai th2.1
  function x2NumArr(arr) {
    const result = []
    let i = 0;
    while(i < arr.length) {
      result.push(arr[i] * 2)
      i++
    }
    return result
  }
  console.log(x2NumArr([1,2,3]))
  //bai 2.2
  function findNumber(arr) {
    const result = []
    let i = 0;
    while(i < arr.length) {
      if(arr[i] % 2 == 0) {
        result.push(arr[i])
      }
      i++
    }
    return result
  }
  console.log(findNumber([1,2,3,4]))
  //bai 2.3
  function findBiggestNum(arr) {
    let result = 0
    let i = 0
    while(i < arr.length) {
      if(result < arr[i]) {
        result = arr[i]
      }
      i++
    }
    return result
  }
  console.log(findBiggestNum([1,3,2]))
  //bai 2.4
  function mateArray(arr) {
    let result = ""
    let i = 0
    while(i < arr.length -2) {
      result = result + arr[i] + ", "
      i++
    }
    return result +arr[arr.length-2]+ "và " + arr[arr.length - 1]
  }
  console.log(mateArray(["nam", "phong", "Đức","zed"]))
  
  //viet 1 ham kiem tra xem chuoi co 2 ki tu ben canh nhau khong
  //tra ve
  function checkSameChar(inputString) {
    const arr = inputString.split("");
    let a = arr[0]
    for(let i = 1; i < arr.length; i++) {
      if(a == arr[i]) {
        return true
      }
      else {
        a = arr[i]
      }
    }
    return false
  }
  console.log(checkSameChar("acca"))
  //accabbb
  function checkSameChar1(inputString) {
    const arr = inputString.split("");
    let a = arr[0]
    const result = []
    for(let i = 1; i < arr.length; i++) {
      if(a == arr[i]) {
        if(!result.includes(a)){ 
          result.push(a)
         }
      }
      else {
        a = arr[i]
      }
    }
    return result
  }
  console.log(checkSameChar1("acccaabbb"))
  