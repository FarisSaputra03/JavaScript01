async function getUsers(){
    await new Promise((resolve)=> setTimeout(resolve, 3000));
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json()
    return user;
}


async function Users() {
    const data = await getUsers();
  return( 
  <div className="container mx-auto py-5">
  
        {data.map((user)=>{
            
            return (
                <div key={user}
                className="p-4 bg-black rounded-sm mb-3 text-white">
                <h5 key={user}>{user.name}</h5>
                </div>
             );
        })}
       </div>
    
  )
}

export default Users