import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";



const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const googleProvider = new GoogleAuthProvider();




    // google sign in 
    const googleLogin = () => {
        return signInWithPopup(auth , googleProvider)
    }
    

    // create user email and pass
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user email and pass

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        googleLogin,
        createUser,
        logInUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider;