import Navigation from '../Navigation/Navigation'
import './Page.css'

function Page({children, title, page, setPage}) {
  return (
    <section className="page">
        <Navigation page={page} setPage={setPage}/>
        <div className='page__header'>
            <h2>{title}</h2>
            <hr />
        </div>
        <div>
          {children}
        </div>
    </section>
  )
}


export {Page}
