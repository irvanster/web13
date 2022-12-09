function sum({x, y, pembanding="+"}) {
    //   const { x, y, pembanding } = parameter; //destructuring
    
      if (pembanding == "x") {
        return x * y;
      } else if (pembanding == "+") {
        return x + y;
      }
    
}


export default sum


// function sum({x, y, pembanding="+"}) {
//   //   const { x, y, pembanding } = parameter; //destructuring
  
//     if (pembanding == "x") {
//       return x * y;
//     } else if (pembanding == "+") {
//       return x + y;
//     }
  
// }

// module.export = sum