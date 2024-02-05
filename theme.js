const html= document.documentElement;
const themes = [
	{
		name: "dark-theme",
		index:0,
	},
	{
		name: "light-theme",
		index:1,
	}
]

var thLocal= (localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : {name: "dark-theme",index:0};
html.classList.add(themes[thLocal.index].name);

const findCurrentTheme = (th) => {
	localStorage.removeItem('theme')

	//if is last, become, else next
	if(themes.length - 1 == th.index){
		th= themes[0];
	}else{
		th= themes[th.index + 1]
	}
	//saving in local storage
	localStorage.setItem('theme',
		JSON.stringify(th)
	);

	return [th, th.name]
}

const animationButtonTheme = () => {
	html.classList.add('active');
}

function ChangeTheme(){
	const [newTheme,nameNewT] = findCurrentTheme(thLocal)
	html.classList.remove(thLocal.name);
	html.classList.add(nameNewT);
	animationButtonTheme();
	thLocal= newTheme;
}

document.querySelectorAll('button').forEach( btn => {
	btn.onclick = () => {
		ChangeTheme()
	}
})



