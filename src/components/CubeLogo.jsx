export function CubeLogo({ size = 50 }) {
  return (
    <div className="cube" style={{ width: size, height: size }}>
      <i className="top" />
      <i className="left" />
      <i className="right" />
    </div>
  )
}
