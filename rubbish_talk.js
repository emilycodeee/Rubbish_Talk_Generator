// define randomIndex generator function
function randomIndex(array) {
  const length = array.length
  const number = Math.floor(Math.random() * length)
  return number
}

// define Rubbishtalk generator function
function generateRubbishtalk(selectedArray) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單吧 : )', '很容易吧 : )', '很快吧 : )', '很正常吧 : )']

  //creat a collection to corresponding career 
  let collection = []

  if (!selectedArray) {
    return '你忘了選事主啦!!!!'
  }
  for (let career in task) {
    if (selectedArray.career === career) {
      collection = task[career]
    }
  }

  return ('身為一個' + selectedArray.title + ',' + collection[randomIndex(collection)] + ',' + phrase[randomIndex(phrase)])

}

// exports rubbish_talk.js
module.exports = generateRubbishtalk

