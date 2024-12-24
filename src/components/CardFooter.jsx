
export default ({ children, className, style }) => {
  return (
    <div className={`card-footer ${className}`} style={style}>
      {children}
    </div>
  )
}
