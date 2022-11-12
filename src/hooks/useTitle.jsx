import { useEffect } from 'react';

const useTitle = title => { 
    useEffect(() =>{  // bahir theke data ante use effect use kora hoi
        document.title = title 
    },[title])
};

export default useTitle;