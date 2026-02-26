const dominio ="http://localhost";
const port ="3000";
const base_url = `${dominio}:${port}`;

const routes = {
    selecoes: `${base_url}/selecoes`
};

const GET = async (url)=>{
    try {
    let reqOptions = {method: `GET`};
const result = await fetch(url, reqOptions);
if(result.status !== 200){
    throw new Error(`Error fetching data: ${result.statusText}`);
} 
return await result.json();}
catch (error) {
    console.error(error);
    throw error;
}

}


const POST = async (url, data)=>{
    try {
    let reqOptions = {
        method: `POST`,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
const result = await fetch(url, reqOptions);
if(result.status !== 201){
    throw new Error(`Error posting data: ${result.statusText}`);
} 
return await result.json();}
catch (error) {
    console.error(error);
    throw error;
}

}