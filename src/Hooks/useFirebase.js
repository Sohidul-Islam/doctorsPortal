import { useEffect, useState } from 'react';
import InitializeFirebase from '../pages/Login/Firebase/Firebase.init';
// firebase libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getIdToken, updateProfile } from "firebase/auth";
//initialize firebase app.

InitializeFirebase();
// auth
const auth = getAuth();

//google auth provider
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    // use user state to
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const updateUser = (profile) => {
        updateProfile(auth.currentUser, {
            displayName: profile.name,
        }).then(() => {
            // Profile updated!
            // ...
            setError("")
        }).catch((error) => {
            let errorMessage = error.message;
            errorMessage = errorMessage.slice(9, errorMessage.length - 1)
            setError(errorMessage)
        });
    }
    const signUpWithEmailPassword = (email, password, name, Navigate) => {
        setIsLoader(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                updateUser({ name: name });

                Navigate('/');
                const user = userCredential.user;
                const newUser = user;
                newUser.displayName = name;
                setUser(newUser);
                setError("")
                savedUser(email, name, "POST");

            })
            .catch((error) => {
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
                // The signed-in user info.
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setUser(user);
                savedUser(user.email, user.displayName, "PUT");
                setError('');

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage)
                // The AuthCredential type that was used.
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

    const savedUser = async (email, name, crud) => {
        const result = await fetch('https://glacial-ridge-14430.herokuapp.com/users', {
            method: crud,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name })

        })



    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user).then((idToken) => setToken(idToken));
            } else {
                setUser({});
            }
        });
    }, []);

    useEffect(() => {
        const url = `https://glacial-ridge-14430.herokuapp.com/users/admin?email=${user?.email}`;

        fetch(url).then(res => res.json())
            .then(data => {

                setAdmin(data.admin);
            })
    }, [user.email]);
    return {
        user,
        token,
        signUpWithEmailPassword,
        loginWithEmailPassword,
        signInWithGoogle,
        logout,
        isLoader,
        error,
        setError,
        admin
    }

};

export default useFirebase;