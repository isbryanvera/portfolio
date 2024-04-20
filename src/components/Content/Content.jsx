import { PageContext } from '../../context/AppContext';
import { Contact } from '../../pages/Contact/Contact';
import { About } from '../../pages/About/About';
import { Home } from '../../pages/Home/Home';
import { Page } from '../../pages/Page/Page';
import { Resume } from '../../pages/Resume/Resume';
import { Work } from '../../pages/Work/Work';
import { Footer } from "../Footer/Footer";
import './Content.css';

function renderSpecificPage(page, options) {
  return options[page]
}

const pagesToNavigate = {
  Home: <Home></Home>,
  About: <About></About>,
  Resume: <Resume></Resume>,
  Work : <Work></Work>,
  Contact : <Contact></Contact>
}

const Content = () => {
  return (
    <div className='main__conteiner-information'>
        <PageContext.Consumer>
          {({currentPage}) => (
            <Page title={currentPage}>
              {renderSpecificPage(currentPage,pagesToNavigate)}
            </Page>
          )}
        </PageContext.Consumer>
        <Footer />
    </div>
  );
};

export { Content };
