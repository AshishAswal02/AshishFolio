import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Folio = () => {

  const [res, setRes] = useState();
  useEffect(() => {
    axios.get('/data.json')
      .then(response => setRes(response.data))
      .catch(error => console.log(error))
  }, []);


  return (
    <section id='folio'>
      <h5>My recent work</h5>
      <h2>Profolio</h2>

      <div className="container portfolio-container">
        {
          res?.data.map(({ image, link, desc, id }) => {
            return (
              <article className="item" key={id}>
                <div className="item-image">
                  <img src={image} alt="findImage" />
                </div>
                <h3>{desc}</h3>
                <a href={link} className="btn" target="_blank">Have a look</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Folio
