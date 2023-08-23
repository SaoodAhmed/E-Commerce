// "use client"
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { ContextCart } from '@/global/context'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useContext, useState } from 'react'
// import { AiOutlineClose } from 'react-icons/ai'




// const SubComp = () => {
//     let {userData,logOut, emailVerificationCode, updateUserNamePhoto, loading} = useContext(ContextCart)
//     const [isSideProfileOpen, setSideProfileOpen] = useState(false)
//     const [isUserEditingName, setIsUserEditingName] = useState(false)
//     const [nameOf, setNameOf] = useState("")
//     let name = userData?.displayName;

    
//     function handleEditName(){
//         console.log("i am goig to call ... ")
//         updateUserNamePhoto(nameOf)
//         setIsUserEditingName(false)
//         window.location.reload()
//     }
//   return (


//     <div className=' overflow-hidden'>
//         { userData ? 
//             <div onClick={()=>setSideProfileOpen(true)} className='mr-4 md:mr-0 cursor-pointer h-9 w-9 bg-slate-500 rounded-full  flex items-center justify-center'>
//                 {userData.photoURL?
//                     <Image className='object-cover rounded-full' height={100} width={100} src={userData.photoURL} alt={userData.displayName}/>
//                     : userData.displayName?
//                     <p className='text-sm'>{userData.displayName.slice(0, 1)}</p>
//                     :
//                     <p className='text-sm text-slate-900'>N</p>
//                 }
                
//             </div>
//             : 
//             <div className='flex gap-2'>
//                 <Link href={'/singUp'}><Button className='px-3 py-1 rounded-none'>SignUp</Button></Link>
//                 <Link href={'/login'}><Button className='px-3 py-1 rounded-none border border-purple-500 bg-transparent hover:bg-slate-800'>SignIn</Button></Link>
//             </div>
//         }
//         <div className={`${isSideProfileOpen ? "visible translate-y-0" : "invisible -translate-y-full"} duration-500 py-4 px-4 w-72 md:w-80 bg-gray-800 h-full text-gray-100 absolute right-0 top-0 bottom-0 z-50`}>
//             <div className='flex justify-between items-center py-2'>
//                 <p className='text-xl font-medium '>Profile</p>
//                 <div className=' cursor-pointer' onClick={()=>setSideProfileOpen(false)}>
//                     <AiOutlineClose size={25}/>
//                 </div>
//             </div >
            
//                 {userData && (
//                     <div className='text-center text-gray-200 py-2'> 
//                         {loading && (
//                             <div> Loading...</div>

//                         )
                            
//                         }

//                         {isUserEditingName && (<div className='flex'>
//                             <Input onChange={(e:any)=>setNameOf(e.target.value)} type='text' value={nameOf} className='w-full outline-gray-400 hover:outline-purple-600 rounded-l-md'/>
//                             <button onClick={handleEditName} className=' text-sm text-blue bg-purple-600 h-10 py-1 px-2 rounded-r-lg '>
//                                 Done
//                             </button>
//                         </div>)}


//                         <h4 className=" text-xl font-bold"><span className='font-bold'>Name : </span> {name ? name : "Not Setted"}</h4>
//                         {
                            
//                                 <button className=' text-sm text-blue hover:underline duration-300 text-blue-600 ' onClick={()=>setIsUserEditingName(true)}>
//                                     Edit Name
//                                 </button>
                            
//                         }
//                         <h4 className="text-lg"><span className='font-bold'>Email : </span> {userData?.email}</h4>
//                         <h4 className="text-sm"><span className='font-bold'>Is Email Verified : </span>{userData?.emailVerified?"Verified":"Not verified"}</h4>
//                         {!userData.emailVerified && <button className="underline text-blue-600 text-sm" onClick={emailVerificationCode}>
//                             Varify Email
//                         </button>}
//                         <p className='my-2 text-xs text-red-600 font-light'>Check your inbox after Clicking Verify your Email</p>
//                         <p className='my-2 text-xs text-red-600 font-light '>If changes didn't reflected please refresh</p>
//                         <button className=' p-2 w-full rounded-lg border' onClick={logOut}>
//                             Log Out
//                         </button>
//                 </div>)}
            
//         </div>
//     </div>

//   )
    
            


// }
// export default SubComp
"use client"

import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image"
import { ContextCart } from "@/global/context"
import { useContext, useState } from "react"
import Link from "next/link";
import { Input } from '@/components/ui/input';

const SubComp = () => {
    let { userData, logOut, emailVerificationCode, updateUserNamePhoto, loading } = useContext(ContextCart)
    const [isSideProfileOpen, setSideProfileOpen] = useState(false);
    const [isUserEditingName, setUserEditingName] = useState(false);
    const [nameOf, setNameOf] = useState("");
    let name = userData?.displayName;

    function handleEditName() {
        updateUserNamePhoto(nameOf);
        setUserEditingName(false);
    }

    return (
        <div className="overflow-hidden">
            {userData ?
                <div onClick={() => setSideProfileOpen(true)} className="cursor-pointer mr-4 md:mr-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-700 bg-white">
                    {userData.photoURL ?
                        <Image className="object-cover rounded-full" width={300} height={300} src={userData.photoURL} alt={userData.displayName} />
                        : userData.displayName ?
                            <p className="text-sm">{userData.displayName.slice(0, 1)}</p>
                            :
                            <p className="text-sm ">N</p>
                    }
                </div>
                :
                <div className="flex gap-2">
                    <Link href="/singUp" className="hidden md:flex text-white bg-gray-900 px-3 py-1">SignUp</Link>
                    <Link href="/login" className=" text-white border border-purple-800 px-3 py-1 mr-10 md:mr-0">SignIn</Link>
                </div>
            }

            <div className={`${isSideProfileOpen ? "visible translate-y-0" : "invisible -translate-y-full"} duration-500 py-4 px-4 w-72 md:w-80 bg-gray-800 h-full text-gray-100 absolute right-0 top-0 bottom-0 z-50`}>
                <div className="flex justify-between py-2 items-center">
                    <h6 className="font-semibold text-xl">Profile</h6>
                    <div className="cursor-pointer" onClick={() => setSideProfileOpen(false)}>
                        <AiOutlineClose size={26} />
                    </div>
                </div>
                {userData && (
                    <div className="text-center py-2 text-gray-200">
                        {loading &&
                            <div>Loading...</div>
                        }
                        {isUserEditingName && (<div className="flex">
                            <Input onChange={(e:any)=>setNameOf(e.target.value)} type='text' value={nameOf} className='w-full outline-gray-400 hover:outline-purple-600 rounded-l-md'/>
                            <button onClick={handleEditName} className=' text-sm text-blue bg-purple-600 h-10 py-1 px-2 rounded-r-lg '>
                                Done
                           </button>
                        </div>)}
                        <h3 className="text-xl font-semibold"><b>Name :</b> {name ? name : "Not setted"}</h3>
                        {
                            <button className="underline text-blue-600 text-sm" onClick={() => setUserEditingName(true)}>
                                Edit Name
                            </button>
                        }
                        <h4 className="text-lg "><b>Email : </b>{userData.email}</h4>
                        <p className="text-sm"><b>Is Email varified :</b> {userData.emailVerified ? "Varified" : "Unvarified"}</p>
                        {!userData.emailVerified && <button className="underline text-blue-600 text-sm" onClick={emailVerificationCode}>
                            Varify Email
                        </button>}
                        <p className="my-2 text-xs text-red-600 font-light">Please check you inbox after Clicking Varify Email</p>
                        <p className="my-2 text-xs text-red-600 font-light">If changes did not reflected please refresh</p>
                        <button className="w-full border rounded-lg p-2" onClick={logOut}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SubComp