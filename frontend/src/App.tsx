import NotificationButton from "./componentes/NotificationButton"
import Header from "./componentes/Header"
import Salescard from "./componentes/Salescard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
