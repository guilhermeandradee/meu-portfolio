import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header'
import Presentation from './components/Presentatios'
import Projects from './components/Projects';
import WorkTogether from './components/WorkTogheter';

function App() {

  return (
    <>  
        <main className='container-fluid h-100-vh d-flex flex-column align-items-center px-md-5' style={{fontFamily: 'roboto'}} >
            <Header />

            <Presentation />

            <Projects />

            <WorkTogether/>
        </main>
    </>
  )
}

export default App
