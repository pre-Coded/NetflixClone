document.getElementById('placeholder').addEventListener('focus',()=>{
    if(document.getElementById('placeholder').value == ""){
        document.querySelector('label').classList.add('filled');
    }
})

document.getElementById('placeholder').addEventListener('blur',()=>{
    if(document.getElementById('placeholder').value != ""){
        document.querySelector('label').classList.add('filled');
    }else{
        document.querySelector('label').classList.remove('filled');
    }
})