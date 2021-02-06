var longestCommonPrefix = function(strs) {
  if((!strs) || strs.length < 2)return strs[0] || ''
  let origin = strs.splice(0, 1)[0].split('')
  let str = ''
  let flag = false;
  let ind = 0;
  while (ind < origin.length){
    //f
      let char = origin[ind]
      strs.forEach(item=>{
          //lfow.indexOf(f, 0) = 1
          if(item.indexOf(char, ind) !== ind)flag = true
      })
      ind ++
      if(!flag)str += char
  }
  return str;
};

let arr = ['abcd', 'abd', 'abed', 'a']
console.log(longestCommonPrefix(arr))