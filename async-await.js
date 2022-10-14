const authenticate = async(username,password) => {
    console.log(`authenticating with userId : ${username} and ${password}...`);
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(username === 'user123' && password ==='password'){
                resolve( {success:true} );
            }
            reject (new Error("wrong username or password !"));
        },3000)
    })
    
    
}
const fetchData = async() =>{
    console.log(`getting data! please wait...`);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve( {id:1, name:'user'} );
    },4000)
    })
    
    
}

const getData = async() =>{
    try{
    const res = await authenticate('user123','password');
    if(res.success){
        const data = await fetchData();
        console.log(data);
    }
}
catch(err){
    console.log(err.message)
}
}

getData();