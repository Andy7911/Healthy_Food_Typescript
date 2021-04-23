import React from 'react';

export const TestContext = React.createContext({ 
  User: {},
  lang: 'en',
  theme: 'dark'
});


const TestContest=()=>{

return(<TestContext.Provider value={{User:{id:12},lang:'en',theme:'blue'}}></TestContext.Provider>)

}