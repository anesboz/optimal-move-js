// import debug from "../debug"

// l'appel : debug({ maVariable }) 
export function debug(varObj) {
  var varName = Object.keys(varObj)[0]
  console.log("%c" + varName + " :", "background: #222; color: #bada55") 
  console.log( varObj[varName])
}

export function flag() {
  console.log("%c@@@@@@@@@@@@", "background: red; color: yellow")
}
