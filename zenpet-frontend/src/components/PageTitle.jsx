import { useEffect } from 'react';




const PageTitle = ({ title }) => {
  useEffect(() => {
   
    document.title = `${title} | ZenPet`;
   
   
  }, [title]);


  return null;  
};



export default PageTitle; 
