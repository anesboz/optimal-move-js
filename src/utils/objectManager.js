export function obj_groupBy(arrayOfObjects, key, applyOnObject = (e) => e) {
  if (arrayOfObjects == null || arrayOfObjects.length === 0) return []
  const possiblesKeys = [...new Set(arrayOfObjects.map((e) => e[key]))]

  return possiblesKeys.map((value) => {
    const data = arrayOfObjects.flatMap((e) =>
      e[key] === value ? applyOnObject(e) : []
    )

    return {
      groupedBy: key,
      value,
      data,
    }
  })
}
