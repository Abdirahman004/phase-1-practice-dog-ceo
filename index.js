document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];
    
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        allBreeds = Object.keys(data.message);
        allBreeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
        addBreedClickListener();
      });
  
    // Challenge 3: Change color of clicked breed
    function addBreedClickListener() {
      const breedList = document.getElementById('dog-breeds');
      breedList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
          event.target.style.color = 'red';
        }
      });
    }
  
    // Challenge 4: Filter breeds based on dropdown selection
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', event => {
      const selectedLetter = event.target.value;
      const breedList = document.getElementById('dog-breeds');
      breedList.innerHTML = '';
      const filteredBreeds = allBreeds.filter(breed => selectedLetter === 'all' || breed.startsWith(selectedLetter));
      filteredBreeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedList.appendChild(li);
      });
      addBreedClickListener();
    });
  });
  