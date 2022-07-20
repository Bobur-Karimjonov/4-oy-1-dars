let elList = document.querySelector('.js-list');
for(arr of pokemons){
  let elId = document.createElement('h2');
	let elItem = document.createElement('li');
	let elNum = document.createElement('span');
	let elName = document.createElement('h3');
	let elImg = document.createElement('img');
	let elType = document.createElement('p');
	let elHeight = document.createElement('h4');
	let elWeight = document.createElement('h4');
	let elCandy = document.createElement('span');
	let elEgg = document.createElement('p');
	let elSpawnTime = document.createElement('h4');


  elId.textContent = `id: ${arr.id}`
	elName.textContent = `name: ${arr.name}`;
	elImg.src = `${arr.img}`;
	elType.textContent = `Type: ${arr.type}`;
	elHeight.textContent = `Heights: ${arr.height}`;
	elWeight.textContent = `Weights: ${arr.weight}`;
	elCandy.textContent = ` Cand: ${arr.candy}`;
	elEgg.textContent = `${arr.egg}`;
	elSpawnTime.textContent = `Time: ${arr.spawn_time}`;



	elId.setAttribute('class', 'js-id');
	elNum.setAttribute('class', 'js-num');
	elName.setAttribute('class', 'js-name');
	elImg.setAttribute('class', 'js-img');
	elType.setAttribute('class', 'js-type');
	elHeight.setAttribute('class', 'js-height');
	elWeight.setAttribute('class', 'js-weight');
	elCandy.setAttribute('class', 'js-candy');
	elEgg.setAttribute('class', 'js-egg');
	elSpawnTime.setAttribute('class', 'js-time');


	elItem.appendChild(elId);
  elItem.appendChild(elName);
	elItem.appendChild(elNum);
	elItem.appendChild(elImg);
	elItem.appendChild(elType);
	elItem.appendChild(elHeight);
	elItem.appendChild(elWeight);
	elItem.appendChild(elCandy);
	elItem.appendChild(elEgg);
	elItem.appendChild(elSpawnTime);
	elList.appendChild(elItem);
}