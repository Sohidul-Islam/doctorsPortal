import React, { useEffect, useState } from 'react';
import InitializeFirebase from '../pages/Login/Firebase/Firebase.init';
// firebase libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
//initialize firebase app.

InitializeFirebase();
// auth
const auth = getAuth();

//google auth provider
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {


    // use user state to
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const updateUser = (profile) => {
        updateProfile(auth.currentUser, {
            displayName: profile.name,
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    const signUpWithEmailPassword = (email, password, name, Navigate) => {
        setIsLoader(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                updateProfile({ name: name });

                Navigate('/');
                const user = userCredential.user;
                const newUser = { displayName: user.displayName, ...user }
                setUser(newUser);
                setError("")

            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = error.message;
                errorMessage = errorMessage.slice(9, errorMessage.length - 1)
                setError(errorMessage)
                // ..
            })
            .finally(() => setIsLoader(false));
    }

    const loginWithEmailPassword = (email, password, navigate, location) => {
        setIsLoader(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setUser(user);
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = error.message;
                errorMessage = errorMessage.slice(9, errorMessage.length - 1)
                setError(errorMessage)
                console.log("error: ", errorMessage);
            })
            .finally(() => setIsLoader(false));
    }

    const signInWithGoogle = (navigate, location) => {
        setIsLoader(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
            .finally(() => setIsLoader(false));
    }
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
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
        loginWithEmailPassword,
        signInWithGoogle,
        logout,
        isLoader,
        error,
        setError
    }

};

export default useFirebase;