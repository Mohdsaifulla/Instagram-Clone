import React, { useEffect, useState } from 'react'
import useAuthStore from "../store/authStore"
const useFollowUser = (userId) => {
const [isUpdating,setIsUpdating]=useState(false)
 const [isFollowing,setIsFollowing]=useState(false)
// const authUser=useAuthStore(state=> state.user)
const {user,setAuthUser}=useAuthStore()
const {userProfile,setUserProfile}=useUSerProfileStore()
const showToast=useShowToast()

const handleFollowUser=async()=>{
    setIsUpdating(true)
    try{
        const currentUserRef=doc(firestore,"users",authUser.uid)       
    }
}

useEffect(()=>{
    if(authUser){
        const isFollowing=authUser.following.include(userId)
        setIsFollowing(isFollowing)
    }

},[authUser,userId])


return {isUpdating,isFollowing,handleFollowUser}
}

export default useFollowUser