const imageContainer = document.getElementById('imageContainer');
const loadMoreButton = document.getElementById('loadMore');

const imagesToAdd = [
  'images/reviews/IMG_6319.JPEG',
  'images/reviews/IMG_6320.JPEG',
  'images/reviews/IMG_6321.JPEG',
  'images/reviews/IMG_6322.JPEG',
  'images/reviews/IMG_6323.JPEG',
  'images/reviews/IMG_6324.JPEG',
  'images/reviews/IMG_6325.JPEG',
  'images/reviews/IMG_6326.JPEG'
];
loadMoreButton.addEventListener('click', function() {
    console.log('Button clicked');
    for (let i = 0; i < 4; i++) {
      if (imagesToAdd.length > 0) {
        let newImage = document.createElement('img');
        newImage.src = imagesToAdd.shift();
        newImage.style.width = '30%'; // задаем ширину
        newImage.style.height = '10%'; // задаем высоту
        newImage.style.margin = '2px'; 
        imageContainer.appendChild(newImage);
      } else {
        break;
      }
    }
  });