export function getData() {
  // if (!localStorage.getItem(`data`)) {
  //   localStorage.setItem(`data`, JSON.stringify(initialData))
  // }
  return JSON.parse(localStorage.getItem(`data`)) || []
}

export function updateData(newData) {
  localStorage.setItem(`data`, JSON.stringify(newData))
}
