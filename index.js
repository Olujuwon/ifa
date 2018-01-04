const members = ["Senad", 'Mohammed', 'Juwon', 'Sanjog', 'Sannu','Pragya','Anh', 'Rasbin', 'Niloo', 'Lam'];
const button =document.getElementById('d1butt');

choosenOne= () =>{
    let choosen = Math.floor(Math.random()*10);
    console.log(choosen)
    return  document.getElementById("here").innerHTML = `${members[choosen]}!`; 
}

button.addEventListener('click', choosenOne)


