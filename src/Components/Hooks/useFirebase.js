import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
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
        logOut,
        isLoading
    }





    // const [user, setUser] = useState({});

    // const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();

    // const signInUsingGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             console.log(result.user);
    //         })
    // }

    // const logOut = () => {
    //     signOut(auth)
    //         .then(() => {
    //             setUser({})
    //         })
    // }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //     });
    // })

    // const handleEmailChange = (e) => {
    //     console.log(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     console.log(e.target.value);
    // }

    // return {
    //     user,
    //     signInUsingGoogle,
    //     logOut,
    //     handleEmailChange,
    //     handlePasswordChange
    // }
}

export default useFirebase;