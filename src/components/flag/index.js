export function Flag({ locale }) {
  return (
    <img
      src={`/images/flag-${locale}.png`}
      alt="Icon flag for languages"
      width={22}
      height={22}
    />
  )
}
