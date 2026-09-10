import { useState , useEffect } from "react";

// const userDetail = (userId)=>{
//     const[loading , setLoading] = useState(false);
//     const [name , setName] = useState('');
//     const [error , setError] = useState(false);
//     useEffect(()=>{
//         let cancelled = AbortController();
//         try{
//             setLoading(true)
//             setError(false)
//             const response = fetchUserProfile(userId)
//             if(!cancelled){
//                 setName(response.name);
//                 setLoading(false)
//             }
//             cancelled = true;
//             if(cancelled){
//                 setError(true)
//             }

//         }catch(error){
//             setError(true)
//         }
//     },[userId])
//     return(
//         <div>
//             {loading && <p>Loading...</p>}
//             {name} 
//             {error && <p>Failed to load</p>}
//         </div>
//     )
// }
// function getActiveRecords(records){
//   return records
//   .filter(user=>user.status === "actice")
//   .map(user=>(
//     {
//         id:user.id,
//         score: user.score
//     }
//   ))
// };
// function productList(products){
//     return products
//     .filter(user=>user.inStock==true && user.price<60000)
//     .map(user=>{
//         <ul>
//             <li key={id}>{user.name}</li>
//         </ul>
//     })
// }
// function userStatusList({status}){
//     const[user , setUser] = useState(status);
//     useEffect(()=>{
//         setUser(status)
//     },[status])
//     return(
//         <div>
//             user ==="active"?"Active User": "Inactiver user"
//         </div>
//     )

// }
function UserProfile ({userId}){
    const [name , setName] = useState("");
    const [loading,setLoading] = useState(false);
    const [error , setError] = useState(false);

    useEffect(()=>{
        const loadUser = async()=>{
            let cancelled = false;
            try {
               setLoading(true);
             const response = await fetchUserProfile(userId);
             if(!cancelled){
                setName(response.name)
                setLoading(false);
             }
           } catch (error) {
            if(!cancelled){
                setLoading(false)
                setError(true)
            }

           }
        };

        loadUser();
         return ()=>{
                cancelled = true;
             };
    },[userId])
    return(
        <div>
            {loading && <p>Loading...</p>}
            {
                error && <p>Failed to load user</p>
            }
            {
                !loading && !error && name && <p>{name}</p>
            }
            
        </div>
    )

}
async function getValidSensorData(farmId){
    try {
        const response = await fetchSensorData(farmId);
        if(response === 404){
            return null
        }
        response.filter(data=>data.isValidReading(farmId))

        .map(data=>{
            return {
                farmId:farmId,
                ValidReading:[...reading]
            }
        })
    } catch (error) {
        throw new Error("NetworkError")
    }
}