const s = 'anagram'          //assign the first word 
const t = 'nagaram'           //assign the second word 

const arrayS = [...s]
const arrayT = [...t]

let index = 0
let countS = 0
let countT = 0

for (x of arrayS) {
  countS = countS + s.charCodeAt(index)
  index = index + 1
}
index = 0
for(x of arrayT) {
  countT = countT + t.charCodeAt(index)
  index = index + 1
}

if (countT == countS) {
  console.log('True')
}
else {
  console.log('False')
}

