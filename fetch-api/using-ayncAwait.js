// 

async function getusers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    console.log("First File response");
    users.slice(0,5).forEach(usr => {
        console.log(`#${usr.id} : ${usr.name } `);
    
    }
    )
    
  } catch (error) {
    console.error("error fetching users:", error);
    
  }  
}

getusers();