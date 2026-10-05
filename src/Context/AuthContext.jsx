import { createContext, useState } from 'react'
import { getLocalStorage , setLocalStorage} from '../utils/LocalStorage';

export const Context = createContext();

 const AuthContext = ({children}) => {

  const [ userData , setUserData ] = useState(() => {
    setLocalStorage()
    const { employees = [] } = getLocalStorage()
    return employees
  })
  
  
   return (
     <div>
<Context.Provider value={[userData , setUserData ]}>
{children}
</Context.Provider>
       
     </div>
   )
 }
 
 export default AuthContext
 