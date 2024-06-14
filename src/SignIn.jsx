// src/SignIn.js
import { getDatabase, push, ref, set } from "firebase/database";
import { app, auth, provider, signInWithPopup } from "./firebase";

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result :>> ", result);
        const user = result.user;
        const isNewUser = result?._tokenResponse?.isNewUser;
        console.log("User:", user);
        console.log("Is New User:", isNewUser);
        let userDetails = {
          userId: user?.uid,
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          phoneNumber: user?.phoneNumber,
        };
        if (isNewUser) {
          userDetails = {
            ...userDetails,
            createdAt: new Date().toISOString(),
          };
          writeData(userDetails);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const writeData = async (userDetails) => {
    const db = getDatabase(app);
    const newDoc = push(ref(db, "users"));
    set(newDoc, userDetails)
      .then(() => {
        console.log("Data written successfully");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
