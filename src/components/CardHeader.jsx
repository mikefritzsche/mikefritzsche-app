
export default ({ children, className, style }) => {
  return (
    <div className={`card-header ${className}`} style={style}>
      {children}
    </div>
  )
}
