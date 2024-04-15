const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const imageInput = document.getElementById('link');
const generate = document.getElementById('generate');
const memeDiv = document.getElementsByClassName('memeContainer');
const meme = document.getElementsByClassName('meme');

generate.addEventListener('click', function(e) {
  e.preventDefault();

  if(!topText.value.trim() || !bottomText.value.trim() || !imageInput.value.trim()) {
    alert('Please fill out all fields');
    return;
  }

    const meme = document.createElement('div');
    meme.classList.add('meme');
    const img = document.createElement('img');
    img.src = imageInput.value;
    const top = document.createElement('div');
    top.classList.add('top');
    top.innerText = topText.value;
    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    bottom.innerText = bottomText.value;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'X';
    meme.appendChild(img);
    meme.appendChild(top);
    meme.appendChild(bottom);
    meme.appendChild(removeBtn);
    memeDiv[0].appendChild(meme);
    topText.value = '';
    bottomText.value = '';
    imageInput.value = '';

    removeBtn.addEventListener('click', function(e) {
      e.target.parentElement.remove();
    });
    
});

