const typedText = document.getElementById('text');
const cursor = document.getElementById('cursor');
texts = ["Hi, I'm Prathamesh.", "I'm a Web Dev.", "I'm a UI/UX enthusiast."];

const typingTime = 200;
const deletingTime = 50;
const haltTime = 2000;
const newTextTypingTime = 700;

let currentChar = 0;
let currentText = 0;

const typeText = () => {
	if (currentChar <= texts[currentText].length) {
		if (!cursor.classList.contains('typing')) cursor.classList.add('typing');
		typedText.textContent += texts[currentText].charAt(currentChar);
		currentChar++;
		setTimeout(typeText, typingTime);
	} else {
		if (cursor.classList.contains('typing')) cursor.classList.remove('typing');
		setTimeout(deleteText, haltTime);
	}
};

const deleteText = str => {
	if (currentChar > 0) {
		if (!cursor.classList.contains('typing')) cursor.classList.add('typing');
		typedText.textContent = texts[currentText].substr(0, currentChar - 1);
		currentChar--;
		setTimeout(deleteText, deletingTime);
	} else {
		if (cursor.classList.contains('typing')) cursor.classList.remove('typing');
		currentText++;
		if (currentText >= texts.length) currentText = 0;
		setTimeout(typeText, newTextTypingTime);
	}
};

document.addEventListener('DOMContentLoaded', () => setTimeout(typeText, 8000));

const quickLinks = document.querySelector('#checkbox');
const quickLinksBtn = document.querySelector('#quickLinksBtn');

const toggleLinks = () => {
	quickLinksBtn.classList.remove('fadein');
	quickLinksBtn.classList.add('fadeout');
	if (quickLinks.checked) {
		setTimeout(() => {
			quickLinksBtn.classList.remove('fadeout', 'fa-external-link-alt');
			quickLinksBtn.classList.add('fadein', 'fa-times');
		}, 300);
	} else {
		setTimeout(() => {
			quickLinksBtn.classList.remove('fadeout', 'fa-times');
			quickLinksBtn.classList.add('fadein', 'fa-external-link-alt');
		}, 300);
	}
};
quickLinks.addEventListener('change', toggleLinks);
