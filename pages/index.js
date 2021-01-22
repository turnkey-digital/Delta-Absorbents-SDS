// Utilities
import Link from 'next/link'

// Dependancies
import fetch from 'isomorphic-unfetch'

// Custom Components
import Header from '../components/global/Header'
import createMarkup from '../functions/createMarkup'

function IndexPage() {
  return (
    <section className="root-container">
      <section className="homepage-container">
        <img className="dim logo" src="https://www.deltaadsorbents.com/wp-content/uploads/2021/01/email-logo.png" />
        <style jsx>{`
        .homepage-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }
        img {
          width: 100%;
          max-width: 500px;
          height: auto;
        }
      `}</style>
      </section>
    </section>
  )
}


export default IndexPage