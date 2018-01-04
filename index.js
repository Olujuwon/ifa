//checks if something is in the localstorage 
const token = (localStorage.getItem('token'))? JSON.parse(localStorage.getItem('token')):{
    day: [],
    month: [],
    member:[]
}
const members = ["Senad", 'Mohammed', 'Juwon', 'Sanjog', 'Sannu','Pragya','Anh', 'Rasbin', 'Niloo', 'Lam'];
const button =document.getElementById('d1butt');

choosenOne= () =>{
    let choosen = Math.floor(Math.random()*10);
    token.member.push(choosen);
    console.log(choosen)
    return  document.getElementById("here").innerHTML = `${members[choosen]}!`; 
}

button.addEventListener('click', () => {
    let  d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    if (token.day.includes(day)  && token.month.includes(month)){
        alert(`Please , you'll have to wait another 24hours before you can run the program again!`)
    }else{
        token.day.push(day);
        token.month.push(month);
        console.log(token)
        storeData();
        choosenOne();
    }
    console.log(`${day} - ${month}`)
 });

const storeData = ()=>{
    localStorage.setItem('token', JSON.stringify(token))
};