
import Footer from './Footer'
import NaBar from './NaBar'

export default function Layout({children}) {
  return (
    <div>
      
        <NaBar/>
        <section>
            {children}
        </section>
        <Footer/>
    </div>
  )
}
