import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const loginUser=useAuthStore(state => state.login)
    // const logOut=useAuthStore(state => state.logOut)
  const showToast = useShowToast();
  const signup = async (input) => {
    if (!input.email || !input.password || !input.username || !input.fullName) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    } 
//queries
const usersRef=collection(firestore,"users")
const q=query(usersRef, where('username',"==",input.username))
const querySnapshot=await getDocs(q)
if(!querySnapshot.empty){
showToast("Error","User already exists","error")
return
}
    try {
      const newUser = await createUserWithEmailAndPassword(
        input.email,
        input.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: input.email,
          username: input.username,
          fullName: input.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc)
      }
    } catch (error) {
        showToast("Error", error.message, "error");
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
