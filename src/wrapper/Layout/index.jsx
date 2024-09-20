import './layout.scss'

function Layout({ children }) {
  return (
    <>
      <div className="layout__container">
        {children}
      </div>
    </>
  )
}

export default Layout
