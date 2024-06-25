'use client';
import React, {
  Fragment,
  createRef,
  use,
  useEffect,
  useRef,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import app from '../firebaseConfig';
import {
  getFirestore,
  serverTimestamp,
  orderBy,
  limit,
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { limitToFirst, set } from 'firebase/database';
import { Avatar } from 'flowbite-react';
import { arrayBuffer } from 'stream/consumers';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
const auth = getAuth(app);
const FireStoreDataBase = getFirestore(app); // defining firebase firestore
const EmptyMessageList: any = []; // creating an empty list

//main component below have also used the TS type defintion Below
export default function MessageWindow(): React.JSX.Element {
  //below I am setting a message list and giving it an intial state I am also telling react the state will change I am also defining functions for both the message and the list
  const [MessageList, setMessageList]: any = useState(EmptyMessageList);
  const [message, setMessage]: any = useState('');
  const [DatbaseMessageArray, setDatabaseMessageArray]: any = useState([]);
  const [recentmessage, setRecentmessage]: any = useState([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  //const [values, loading, error, snapshot] = useCollectionData(Query);
  //const TheMostUpTodateMessages: any = values;
  //console.log(TheMostUpTodateMessages);

  useEffect(() => {
    const Query = query(
      collection(FireStoreDataBase, 'Production App Data'),
      orderBy('UserTimeStamp', 'desc'),
      limit(5)
    );

    const unsubscribe = onSnapshot(Query, (QuerySnapshot) => {
      const fetchedMessages: {
        UserTimeStamp: any;
        databaseMessage: any;
        Profileimage: any;
        DisplayName: any;
        MID: any;
      }[] = [];
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.UserTimeStamp - b.UserTimeStamp
      );

      setDatabaseMessageArray(sortedMessages);
      //console.log('sorted', sortedMessages);
      QuerySnapshot.forEach((doc) => {
        const messageFromDatabaseUpdated = doc.data().UserMessageContent;
        const PhotoURLUpdated = doc.data().UserPhotoURL;
        const userDisplayNameUpdated = doc.data().UserDisplyName;
        const MessageIdentifierUpdated = doc.data().UserMessageuuidv4;
        const time = doc.data().UserTimeStamp;

        fetchedMessages.push({
          databaseMessage: messageFromDatabaseUpdated.message,
          Profileimage: PhotoURLUpdated.photoURL,
          DisplayName: userDisplayNameUpdated.displayName,
          MID: MessageIdentifierUpdated,
          UserTimeStamp: time,
        });
      });
    });

    return unsubscribe;
  }, []);

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  
  //console.log(message);
  //HandleSubmit  is assigned to the button as an on click event so when the button is clicked first I get the message and make an object and give it an ID then I add it to the message list via concat
  // the set message list overwrites the intial empty state of the array and continues to concat everything to the array but the only thing that gets ingested into the div is the current array of characters in the input

  const HandleSubmit = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (message.trim() === '') {
        console.log('No message to send');
        return; // Return early if message is empty
      }
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;

        const newMessage: any = {
          message,
          id: uuidv4(),
          UserName: displayName,
          UserImage: photoURL,
        };
        // console.log(newMessage);

        try {
          const DocumentRefrence = await addDoc(
            collection(FireStoreDataBase, 'Production App Data'),
            {
              UserMessageContent: { message },
              UserMessageuuidv4: newMessage.id,
              UserDisplyName: { displayName },
              UserPhotoURL: { photoURL },
              UserEmail: { email },
              UserTimeStamp: serverTimestamp(),
              uid,
            }
          );
          //console.log('Document written with ID: ', DocumentRefrence.id);
          setMessage('');
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      } else {
        alert('you are not signed in');
        // User is signed out
        // ...
      }
    });
  };
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default form submission on Enter key
      HandleSubmit();
    }
  };

  return (
    <div className="fixed inset-y-1/4 right-0 mr-4 bg-white rounded-l-lg shadow-lg p-4 w-80 md:w-96">
      <div className="flex flex-col h-full">
        <div className="overflow-y-auto flex-grow" ref={messagesEndRef}>
          <ul>
            {DatbaseMessageArray.slice(0)
              .reverse()
              .map((messageContent: any) => (
                <li
                  key={messageContent.uid}
                  className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <Avatar
                      img={messageContent.Profileimage}
                      alt="Profile image"
                      rounded
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {messageContent.DisplayName}
                    </p>
                    <p className="text-sm text-gray-600 break-words">
                      {messageContent.databaseMessage}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-4">
          <input
            type="text"
            name="messageInput"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            onChange={HandleInputChange}
            value={message}
            placeholder="Type a message..."
            onKeyDown={handleKeyDown}
          />
          <button
            className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={HandleSubmit}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
