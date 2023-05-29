import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// this function saves user input to the database
export const putDb = async (content) => {
  console.log('PUT some text into to the database');
  let textDB = await openDB('jate', 1);
  let tx = textDB.transaction('jate', 'readwrite');
  let store = tx.objectStore('jate');
  let request = store.put({ id: 1, value: content });
  let result = await request;
  console.log('data saved to the database', result);

};

// this function will set what ever is in local storage on the home page 
export const getDb = async () => {
  console.log("GET text from the 'base");
  let textDB = await openDB('jate', 1);
  let tx = textDB.transaction('jate', 'readonly');
  let store = tx.objectStore('jate');
  let request = store.get(1);
  let result = await request;
  console.log('result.value', result?.value);
  return result?.value;
};

initdb();


