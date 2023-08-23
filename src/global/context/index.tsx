"use client";

import {createContext, FC, ReactNode, useEffect, useReducer, useState} from "react";
import { cartReducer } from "../reducer";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import BASE_PATH_FOR_API from "@/app/Componet01/shared/BasePath";


export const ContextCart = createContext<any>(null)
interface indexForError{
    [key:string]:string
}


const ContextWrapper:FC<{children:ReactNode}> = ({children})=>{
    let router = useRouter()
    const [userData, setUserData] = useState<any>()
    const [loading, setLoading] = useState(false)
    const [errorViaUserCredential, setErrorViaUserCredential] = useState<indexForError |"">("")
    const [errorsOfFirebase, setErrorsOfFirebase] = useState({
        key: "",
        errorMessage: "",
    });
    const [cartArray,setCartArray] = useState<any>([])

    const [quantity, setQuantity] = useState(0);
    const isBrowser = ()=>typeof window !== undefined;

    useEffect(() => {
        if (isBrowser() && cartArray.length !== 0) {
            setQuantity(cartArray.length);
        }
    }, [cartArray])


    async function fetchApiForAllCartItems(){
        if(userData){

            let res = await fetch(`/api/cartFunc?user_id=${userData.uuid}`)
            console.log(res.ok)
            if(!res.ok){
                throw new Error("failed to fetch the data")
            }
            let dataToReturn = await res.json();
            await setCartArray((prev:any)=>dataToReturn.cartData);
            router.refresh();
            if (dataToReturn) {
                return true
            }
        }
    
    }

    useEffect(()=>{
        fetchApiForAllCartItems()
    },[userData])

    async function dispatch(payload:string, data:any){
        if(payload === "addToCart"){
            console.log("func running of add to cart")
            await fetch(`/api/cartFunc`,{
                method:"POST",
                body:JSON.stringify(data)
            })
        }else if(payload === "removeFromCart"){
            console.log("func running of remove to cart")
            await fetch(`/api/cartFunc?product_id=${data.product_id}&user_id=${data.user_id}`,{
                method:"DELETE"
            })
        }else if(payload==="updateCart"){

            console.log("func running of update to cart")
            console.log("new quantity ",data)
            setLoading(true)
            let dataa = await fetch(`/api/cartFunc`,{
                method:"PUT",
                body:JSON.stringify(data)
            })
            let notdata = await dataa.json()
            console.log(notdata)
            setLoading(false)
        }
        let resp = await fetchApiForAllCartItems()
        if(resp){
            return "sucess"
        }else{
            return "unsucess"
        }
    }

    
    // const intializerOfCart = {
    //     cart:[],
    // }
    
    // const [state, dispatch]= useReducer(cartReducer,intializerOfCart)
    
    //     useEffect(()=>{
    //         let cart = localStorage.getItem("cart") as string;
    //         if(cart===null){
    //             localStorage.setItem("cart",JSON.stringify(state.cart))
    //         }else{
    //             intializerOfCart.cart = JSON.parse(cart)
    //         }
    //     })

    //     useEffect(()=>{
    //         localStorage.setItem("cart",JSON.stringify(state.cart))
    //     },[state.cart])

        let user = auth.currentUser;

        useEffect(() => {

            onAuthStateChanged(auth,(user:any)=>{
                if(user){ //observer know who is singIn or singOut
                    setUserData({
                        displayName:user.displayName,
                        email:user.email,
                        uuid:user.uid,
                        photoURL:user.photoURL,
                        emailVerified:user.emailVerified
                    })
                }else{ 

                    setUserData(null);

                }
            })
        }, [])


        let provider = new GoogleAuthProvider();
        function signUpViaGoogle(){
            setLoading(true)
            return signInWithPopup(auth, provider).then((userData:any)=>{
                if(userData){
                    setUserData({
                        displayName:userData.user.displayName,
                        email:userData.user.email,
                        uuid:userData.user.uid,
                        photoURL:userData.user.photoURL,
                        emailVerified:userData.user.emailVerified
                    })
                    router.push("/")
                    
                }
                setLoading(false);     
            })
        }




        function signUpUser(email: string, password: string) {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password).then((res: any) => {
                setLoading(false);
                router.push("/");
            }).catch((res: any) => {
                let error = res.code.split("/")
                error = error[error.length - 1];
                setErrorsOfFirebase({
                    key: "singUp",
                    errorMessage: error
                })
                setLoading(false);
            });
            setLoading(false);
        };

        function signInUser(email: string, password: string) {
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password).then((res: any) => {
                setLoading(false);
            }).catch((res: any) => {
                let error = res.code.split("/")
                error = error[error.length - 1];
                setErrorsOfFirebase({
                    key: "login",
                    errorMessage: error
                })
            });
            setLoading(false);
        }

        function logOut(){
            setLoading(true);
            signOut(auth);
            setLoading(false);
            window.location.reload()
        }

        function emailVerificationCode(){
            setLoading(true)
            if(user){
                sendEmailVerification(user).then((res:any)=>{
                    window.location.href= "/"
                })
                setLoading(false)
            }
        }

        function updateUserNamePhoto(userName:string, photoURL?:string){
            setLoading(true)
            if(user){
                updateProfile(user, {
                    displayName:userName, photoURL:"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75"
                }).then(()=>{
                    setLoading(false)
                }).catch((error:any)=>{
                    setLoading(false)
                }); 
            }
        }
    
    //const name ="Saud Ahmed"
    return (
            <ContextCart.Provider value={{
                errorsOfFirebase, 
                cartArray, 
                dispatch,
                signUpUser,
                signUpViaGoogle,
                logOut,
                signInUser,
                userData,
                loading,
                setLoading, 
                emailVerificationCode, 
                updateUserNamePhoto,
                quantity,
                setQuantity }}>

                {children}

            </ContextCart.Provider>
    )
} 

export default ContextWrapper;