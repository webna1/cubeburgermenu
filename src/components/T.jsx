export function T({ en, ar, block = false }) {
  return (
    <>
      {en != null && <span className="en">{en}</span>}
      {ar != null && <span className={block ? 'ar blk' : 'ar'}>{ar}</span>}
    </>
  )
}
