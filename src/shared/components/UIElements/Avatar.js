// import React from 'react';

// import './Avatar.css';

// const Avatar = props => {
//   return (
//     <div className={`avatar ${props.className}`} style={props.style}>
//       <img
//         src={props.image}
//         alt={props.alt}
//         style={{ width: props.width, height: props.width }}
//       />
//     </div>
//   );
// };

// export default Avatar;


import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image.replace('http://localhost:5000//', '')}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;


