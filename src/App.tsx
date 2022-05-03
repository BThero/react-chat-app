import React, { createRef, RefObject } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBNGf6R0UjkLTJrcT2rVsXDJrLM4NUi8ek',
  authDomain: 'react-chat-app-44b79.firebaseapp.com',
  projectId: 'react-chat-app-44b79',
  storageBucket: 'react-chat-app-44b79.appspot.com',
  messagingSenderId: '83702218098',
  appId: '1:83702218098:web:778bf80e1dc66ef08bf1eb'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = (): JSX.Element => {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  return (
    <div className="App">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const email = emailRef.current?.value ?? '';
          const password = passwordRef.current?.value ?? '';

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const { user } = userCredential;
              console.log(JSON.stringify(user, null, 2));
            })
            .catch((error) => {
              console.log(error.message);
            });
        }}
      >
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default App;
