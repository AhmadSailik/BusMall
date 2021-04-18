let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');
let counts = 0;
let maxAttempts = 25;
let leftIndex;
let centerIndex; 
let rightIndex;

bus.allImages =[];
function bus(name,source){
  this.name= name;
  this.source = source;
  this.time=0;
  this.votes = 0;
  bus.allImages.push(this);
}
new bus('bag','../image/bag.jpg');
new bus('banana','../image/banana.jpg');
new bus('bathroom','../image/bathroom.jpg');
new bus('boots','../image/boots.jpg');
new bus('breakfast','../image/breakfast.jpg');
new bus('bubblegum','../image/bubblegum.jpg');
new bus('chair','../image/chair.jpg');
new bus('cthulhu','../image/cthulhu.jpg');
new bus('dog-duck','../image/dog-duck.jpg');
new bus('dragon','../image/dragon.jpg');
new bus('pen','../image/pen.jpg');
new bus('pet-sweep','../image/pet-sweep.jpg');
new bus('scissors','../image/scissors.jpg');
new bus('shark','../image/shark.jpg');
new bus('sweep','../image/sweep.png');
new bus('tauntaun','../image/tauntaun.jpg');
new bus('unicorn','../image/unicorn.jpg');
new bus('usb','../image/usb.gif');
new bus('water-can','../image/water-can.jpg');
new bus('wine-glass','../image/wine-glass.jpg');

function genrateRandomIndex(){
  return Math.floor(Math.random() * bus.allImages.length); 
}
function renderThreeImages(){
    leftIndex = genrateRandomIndex(); 
    centerIndex = genrateRandomIndex(); 
    rightIndex = genrateRandomIndex();  
    while(leftIndex === rightIndex ||centerIndex === rightIndex||leftIndex === centerIndex){
      leftIndex = genrateRandomIndex();
      centerIndex = genrateRandomIndex();
      rightIndex = genrateRandomIndex();
    }
    leftImageElement.src =  bus.allImages[leftIndex].source;
    bus.allImages[leftIndex].time++;
    centerImageElement.src =  bus.allImages[centerIndex].source;
    bus.allImages[centerIndex].time++;
    rightImageElement.src = bus.allImages[rightIndex].source;
    bus.allImages[rightIndex].time++;
  }
  renderThreeImages();
  leftImageElement.addEventListener('click', handleClicking);
  centerImageElement.addEventListener('click', handleClicking);
  rightImageElement.addEventListener('click',handleClicking);
function handleClicking(event){
  counts++;
  if(maxAttempts >= counts){
    if(event.target.id ==='left-image'){
      bus.allImages[leftIndex].votes++;   
      }else if(event.target.id ==='center-image'){
      bus.allImages[centerIndex].votes++;
      }else if (event.target.id ==='right-image'){
      bus.allImages[rightIndex].votes++;
    }
    renderThreeImages();   
  }else{
    renderList()
        alert('you are finished')
  }
}
handleClicking()
function renderList(){
      let ul = document.getElementById('unList');
    for(let i = 0 ; i < bus.allImages.length;i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${bus.allImages[i].name} it has ${bus.allImages[i].votes} Votes and show ${bus.allImages[i].time} times`;
      
    }  
}


 // function handleClicking(event){
//   counts++
//   switch (event) {
//     case (event.target.id ==='left-image'):
//       renderThreeImages();
//       bus.allImages[leftIndex].votes++;
//       break;
//     case (event.target.id ==='center-image'):
//       renderThreeImages();
//       bus.allImages[leftIndex].votes++;
//       break;
//     case (event.target.id ==='right-image'):
//       renderThreeImages();
//       bus.allImages[leftIndex].votes++;
//       break;
      
//   }
  
// } 

