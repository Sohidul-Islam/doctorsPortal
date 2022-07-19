import React, { useEffect, useState } from 'react';
import InitializeFirebase from '../pages/Login/Firebase/Firebase.init';
// firebase libraries
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
//initialize firebase app.

InitializeFirebase();

const auth = getAuth();

const useFirebase = () => {


    // use user state to
    const [user, setUser] = useState({});

    const signUpWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setUser(user);
                console.log("new user: ", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);
    return {
        user,
        signUpWithEmailPassword,
        logout,
    }


};

export default useFirebase;