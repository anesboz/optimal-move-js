// import test from "./debug.js";
// test(() => myNiceVariable )
const test = (v) => {
  var varName = v.toString().replace(/[ |\(\)=>]/g, "")
  var varValue = v()
  // if (typeof varValue == "object") {
  //   varValue = JSON.stringify(varValue)
  // }
  console.log("%c" + varName + " :", "color: blue") 
  console.log(varValue)
}

export default test
