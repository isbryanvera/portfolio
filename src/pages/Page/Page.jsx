import './Page.css'

function Page({children, title}) {
  return (
    <section className="page">
        {/* <Navigation/> */}
        <div className='page__header'>
            <h2>{title}</h2>
            <hr />
        </div>
        <>
          {children}
        </>
    </section>
  )
}


export {Page}
