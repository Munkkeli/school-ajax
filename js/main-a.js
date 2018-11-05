// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('./images.html').then(result => {
    result.text().then(text => ul.innerHTML = text);
  });
};

showImages();