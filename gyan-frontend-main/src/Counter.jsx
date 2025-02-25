// import {useEffect, useState} from 'react';
// import * as React from 'react';

// function Counter(){
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         const storedCount = localStorage.getItem('pageVisits');
//         const initialCount=Number(storedCount) || 0;
//         setCount(initialCount+1);
//         localStorage.setItem('pageVisits',initialCount+1);
//     },[]);

//     return(
//         <div>
//             Viewers : {count} 
//         </div>
//     )
// }

// export default Counter;

import { useEffect, useState } from 'react';
import * as React from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('pageVisits');
    const initialCount = Number(storedCount) || 0;
    setCount(initialCount + 1);
    localStorage.setItem('pageVisits', initialCount + 1);
  }, []);

  return (
    <div style={{ color: 'green', textAlign: 'left' }}>
      Viewers: {count}
    </div>
  );
}

export default Counter;
