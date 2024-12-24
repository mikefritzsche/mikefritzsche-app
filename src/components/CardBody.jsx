
export default ({ children, className, style }) => {
  return (
    <div className={`card-body ${className}`} style={style}>
      {children}
    </div>
  )
}
