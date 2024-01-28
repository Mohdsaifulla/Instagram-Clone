import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const login = async (input) => {
    if (!input.email || !input.password) {
      return showToast("Error", "Please fill all the fields", "error");
    }
    try {
      const useCred = await signInWithEmailAndPassword(
        input.email,
        input.password
      );
      if (useCred) {
        const docRef = doc(firestore, "users", useCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    } catch (error) {
      showToast("Error", "error.message", "error");
    }
  };
  return { loading, error, login };
};

export default useLogin;
