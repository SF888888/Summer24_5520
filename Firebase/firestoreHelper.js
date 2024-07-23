import{addDoc} from "firebase/firestore";
import{database} from "./firebaseSetup";
export async function writeToDB(data, collectionName){
    console.log(database);
try{
    await addDoc(collection(database, collectionName),data);
}
catch(error){
    console.error('error writing to db', error);
}
}