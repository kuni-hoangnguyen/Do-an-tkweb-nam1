const myFunction = () => {
	document.getElementById('first1').style.display = 'block';
	document.getElementById('second').style.display = 'none';
	document.getElementById('third').style.display = 'none';
};
const myFunction2 = () => {
	document.getElementById('second').style.display = 'block';
	document.getElementById('first1').style.display = 'none';
	document.getElementById('third').style.display = 'none';
};
const myFunction3 = () => {
	document.getElementById('third').style.display = 'block';
	document.getElementById('first1').style.display = 'none';
	document.getElementById('second').style.display = 'none';
};