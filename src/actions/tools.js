export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function insistWhenErrors(fun) {
  const MAX_TRY = 5
  let i = 0
  while (i < MAX_TRY) {
    i++
    try {
      const res = await fun()
      return res
    } catch (err) {
      continue
    }
  }
  throw `MAX_TRY`
}