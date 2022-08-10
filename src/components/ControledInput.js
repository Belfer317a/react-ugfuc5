import React, { useState } from 'react';


class ControledInput extends React.Component{

  state ={
    someText: ''
  }
  
handleChange = (evt) => {
  this.setState({someText: evt.target.value})
}

  render(){
    return(
      <>
        <input type="text" value={this.state.someText} onChange={this.handleChange}/>
        <h3>{this.state.someText}</h3>
      </>
    )
  }

}




// const ControledInput = () => {
//   const [text, setText] = useState('');

//   const handleChange = (evt) => {
//     setText(evt.target.value.toUpperCase());
//   };

//   return (
//     <>
//       <input type="text" value={text} onChange={handleChange} />
//       <h2>{text}</h2>
//     </>
//   );
// };


export default ControledInput;
