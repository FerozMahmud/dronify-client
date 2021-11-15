import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .finally(() => setIsLoading(false))
    }

    const createAccountWithGoogle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})
            } setIsLoading(false)

        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        signInUsingGoogle,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        logOut,
        isLoading
    }

}

export default useFirebase;