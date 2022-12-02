import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <h1>Layout</h1>
        <section>
            {children}
        </section>
    </div>
  )
}
