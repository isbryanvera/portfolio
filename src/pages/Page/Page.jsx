import './Page.css'

function Page({children, title}) {
  return (
    <section className="page">
        <div className='page__header'>
            <h2 id={title}>{title}</h2>
            <hr />
        </div>
        <>
          {children}
        </>
    </section>
  )
}


export {Page}
