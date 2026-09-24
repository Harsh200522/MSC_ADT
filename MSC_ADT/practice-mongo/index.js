const client =require("./database");

async function run(){
    let connected = false;

    try{
        await client.connect();
        connected=true;
        console.log("Connected to mongoDB ATLAS!");
    }
    catch(e){
        console.log("Errro :"+ e);
    }
}

run();