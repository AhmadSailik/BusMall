let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');
let container = document.getElementById('sec-one');
let counts = 0;
let maxAttempts = 10;
let leftIndex;
let centerIndex; 
let rightIndex;

Bus.allImages =[];

function Bus(name,source){
  this.name= name;
  this.source = source;
  this.time=0;
  this.votes = 0;
  Bus.allImages.push(this);
  
}
new Bus('bag','../image/bag.jpg');
new Bus('banana','../image/banana.jpg');
new Bus('bathroom','../image/bathroom.jpg');
new Bus('boots','../image/boots.jpg');
new Bus('breakfast','../image/breakfast.jpg');
new Bus('bubblegum','../image/bubblegum.jpg');
new Bus('chair','../image/chair.jpg');
new Bus('cthulhu','../image/cthulhu.jpg');
new Bus('dog-duck','../image/dog-duck.jpg');
new Bus('dragon','../image/dragon.jpg');
new Bus('pen','../image/pen.jpg');
new Bus('pet-sweep','../image/pet-sweep.jpg');
new Bus('scissors','../image/scissors.jpg');
new Bus('shark','../image/shark.jpg');
new Bus('sweep','../image/sweep.png');
new Bus('tauntaun','../image/tauntaun.jpg');
new Bus('unicorn','../image/unicorn.jpg');
new Bus('usb','../image/usb.gif');
new Bus('water-can','../image/water-can.jpg');
new Bus('wine-glass','../image/wine-glass.jpg');

function genrateRandomIndex(){
  return Math.floor(Math.random() * Bus.allImages.length); 
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
    leftImageElement.src =  Bus.allImages[leftIndex].source;
    Bus.allImages[leftIndex].time++;
    centerImageElement.src =  Bus.allImages[centerIndex].source;
    Bus.allImages[centerIndex].time++;
    rightImageElement.src = Bus.allImages[rightIndex].source;
    Bus.allImages[rightIndex].time++;
  }
  renderThreeImages();
  
   container.addEventListener('click', handleClicking);
  // leftImageElement.addEventListener('click', handleClicking);
  // centerImageElement.addEventListener('click', handleClicking);
  // centerImageElement.addEventListener('click',handleClicking);
function handleClicking(event){
  counts++;
  if(maxAttempts >= counts){
    if(event.target.id ==='left-image'){
      Bus.allImages[leftIndex].votes++;   
      }else if(event.target.id ==='center-image'){
      Bus.allImages[centerIndex].votes++;
      }else if (event.target.id ==='right-image'){
      Bus.allImages[rightIndex].votes++;
    }
    renderThreeImages();
  }
 
}


let button = document.getElementById('clic');
button.addEventListener('click', showingList);

function showingList(){
  renderList()
  button.removeEventListener('click',showingList);
}
function renderList(){
      let ul = document.getElementById('unList');
    for(let i = 0 ; i < Bus.allImages.length;i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Bus.allImages[i].name} it has ${Bus.allImages[i].votes} Votes and show ${Bus.allImages[i].time} times`;
      
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

