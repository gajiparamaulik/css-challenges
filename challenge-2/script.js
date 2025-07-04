const toggle = document.getElementById('darkModeToggle');
const body = document.body;
console.log("body", body)
// Load saved mode from localStorage
const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
	body.classList.add('dark');
}

toggle.addEventListener('click', () => {

	body.classList.toggle('dark');
	console.log("click function called");
	if (body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'enabled');
	} else {
		localStorage.setItem('dark-mode', 'disabled');
	}
});
