
import NaBar from './NaBar'

export default function Layout({children}) {
  return (
    <div>
        <NaBar/>
        <section>
            {children}
        </section>
    </div>
  )
}
