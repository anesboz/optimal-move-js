export const renderDEVcomment = ({ devMode, title, content }) => {
  if (!devMode) return null
  return (
    <div
      style={{
        backgroundColor: `black`,
        color: `yellow`,
        padding: 15,
        // margin: 15,
        fontSize: `80%`,
        width: `100%`,
        wordWrap: `wrap`,
      }}
    >
      <div style={{ color: `gray` }}>{`// ${title}`}</div>
      <code> {content}</code>
    </div>
  )
}
