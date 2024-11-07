export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return(
    <footer>
      <p>Jessica Castro &copy; {currentYear}</p>
    </footer>
  )
}