import Navigation from '../../components/Navigation/Navigation'
import './Page.css'

function Page({children, title, setCurrentPage}) {
  return (
    <section className="page">
        <Navigation setCurrentPage={setCurrentPage}/>
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
