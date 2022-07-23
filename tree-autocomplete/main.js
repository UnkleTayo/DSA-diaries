const items  = ['0810', '0803',  '0805', '0806', '0703']


const root  = new makeNode('\0')
for(const item of items){
  add(item, 0, root)
}

const textBox = document.getElementById('textBox')
const list = document.getElementById('tree')


function handlers(e){
  str = e.target.value

  list.innerHTML= ''
  const predictions = search(str, 0, root)
  for(const prediction of predictions){
    const li = document.createElement('li')
    li.innerHTML = `<b>${str}</b>${prediction.substring(str.length)}`
    li.dataset.prediction = prediction
    list.appendChild(li)
    list.addEventListener('click', handleClick)
  }
}

function handleClick(e) {
  console.log(e.targt)
  textBox.value = e.target.dataset['data-name'];
}

textBox.addEventListener('keyup', handlers)
