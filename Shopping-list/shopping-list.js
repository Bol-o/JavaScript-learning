const unOrList = document.querySelector('ul')
const input = document.querySelector('#item')
const buttom = document.querySelector('button')
const div = document.querySelector('div')

//buttom.style.color = 'blue'

buttom.addEventListener('click', () => {
    //alert('baaaa')
   const itemOnList = input.value

    //alert(typeof itemOnList)
    input.value = ''
    
    //alert(itemOnList)
    //span.textContent = itemOnList
    //itemOnList = ''

const list = document.createElement('li')
//list.textContent = itemOnList
unOrList.appendChild(list)

const span = document.createElement('span')
span.textContent = itemOnList
list.appendChild(span)

const button2 = document.createElement('button')
button2.textContent = 'DELETE'
button2.setAttribute('style', 'background: salmon; font-size: 8px; margin-left: 20px; color: #666;' )
list.appendChild(button2)

button2.addEventListener('click', () => {
    list.remove();
    document.getElementById('item').focus()
})

document.getElementById('item').focus()
    
}); 
//document.getElementById('item').focus()


//const  div = document.querySelector('div')





