import infoData from '../data/apiData.json';

async function getApiInfo(){
    const infoDataApi = await infoData;
    if(infoDataApi){
        return infoDataApi
    }else{
        throw new Error("Error on obtaining general info about API SERVICES");
    }
}

export const infoServices = {
    getApiInfo
};

