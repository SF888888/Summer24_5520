import{addDoc, doc, getDocs, setDoc, deleteDoc, collection} from "firebase/firestore";
import{database} from "./firebaseSetup";

export async function writeToDB(data, collectionName){
    console.log(database);
try{
    await addDoc(collection(database, collectionName),data);
}
catch(error){
    console.log('error writing to db', error);
}
}

export async function writeWithIdToDB(data, collectionName, id){
  console.log(database);
try{
  await setDoc(doc(database, collectionName, id),data);
}
catch(error){
  console.log('error writing to db', error);
}
}

export async function getDoc(collectionName, docId){
    try{
        const docRef = doc(database, collectionName, docId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return docSnap.data();
        }
        else{
            console.log('no such document');
        }
    }
    catch(error){
        console.log('error getting document:', error);
    }
}

export async function deletefromDB(docId, collectionName){
    try { 
        await deleteDoc(doc(database, collectionName, docId))
    }
    catch (err) {
        console.log("delete from database", err)
    }
}

export async function updateGoalWarning(docId) {
    try {
      const goalRef = doc(db, 'goals', docId);
      await updateDoc(goalRef, {
        warning: true
      });
    } catch (err) {
      console.log("error updating goal warning", err);
    }
  }

  export async function readAllDocs(collectionName){
    try{
        const querySnapshot = await getDocs(query(collection(database, collectionName),
        where("owner", "==", auth.currentUser.uid)
        ))
        let newArray = [];
        querySnapshot.forEach((docSnapshot) => {
            console.log(docSnapshot.id);
            newArray.push({ ...docSnapshot.data(), id: docSnapshot.id });
          });
        return newArray;
    }
    catch(err){
        console.log('error reading all docs', err);
    }
}