
let input = document.getElementById('todo-inp');
let parent = document.getElementById('list-item')
let icon = document.getElementById('plus');
let inpuVal = ''

icon.addEventListener('click', function () {
    inpuVal = input.value;
    let elm = document.createElement('li');
    elm.textContent = inpuVal;
    if(inpuVal == ''){
        alert("please Write Something")
        return false;
    }
    parent.appendChild(elm);
    input.value = ''; // input field clear after add 
    
})

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let inputValue = input.value.trim();
        if (inputValue !== '') {
            let listItem = document.createElement('li');
            listItem.textContent = inputValue;
            parent.appendChild(listItem);
            input.value = ''; // input field clear after add 
        }
    }
});





