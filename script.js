const container = document.querySelector('.petals-container');

function createPetal() {
	const petal = document.createElement('div');
	petal.classList.add('petal');
	petal.style.left = `${Math.random() * 100}%`;
	container.appendChild(petal);
	setTimeout(() => {
		petal.remove();
	}, 10000);
}

setInterval(createPetal, 300);
