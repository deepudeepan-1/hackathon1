document.body.innerHTML =`<section class ="bye"></section> `;

async function github()
{
    const data = await fetch("https://api.github.com/users/timmywheels/repos",{method: "GET"});
    const user = await data.json();
    console.log("user",user);
    user.forEach((element)=>{
 document.body.innerHTML += ` <div class = "user-container" > 
 
 <h2>NAME : ${element.name}</h2> 
 <p><b>ID : </b>${ element.id} </p>
 <p><b> NODE_ID :  ${element.node_id}</p>
 <img src ="${element.avatar_url}"/>
 <p><b>forks_count :${element.forks_count}</P>
 <p><b>stargazers_count :${element.stargazers_count}</P>
 </div>
 ` ;
} )
}
   
github();
