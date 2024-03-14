import {useLayoutEffect} from "react"
import "./sass/style.css"
import relogio1 from "./assets/relogio2.svg"
import relogio2 from "./assets/relogio-preto.svg"
import relogio3 from "./assets/relogio-ultra.svg"
import relogio4 from "./assets/relogio-rose.svg"
import relogio1tl from "./assets/relogioTl.svg"
import { gsap } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef } from "react"

export default function App() {

  const el = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".logo", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".nav",
        start: "top 520px",
        end: "bottom 460px",
      }
    })
    return(() => {
      gsap.killTweensOf(".logo")
    })
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".menu", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".nav",
        start: "top 520px",
        end: "bottom 460px",
      }
    })
    return(() => {
      gsap.killTweensOf(".menu")
    })
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#card", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#card",
        start: "top 520px",
        end: "bottom 460px",
        scrub: true
      }
    })
    return(() => {
      gsap.killTweensOf(".card-item")
    })
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".tl-init", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".for2",
        start: "top 200px",
        end: "bottom 1200px"
      }
    })

    return (() => {
      gsap.killTweensOf(".tl-init")
    })
  }, [])

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.to(".relogio", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger:{
        trigger: ".items",
        start: "top 600px",
        end: "bottom 300px",
        scrub: true
      }
    })

    return() => {
      gsap.killTweensOf(".relogio")
    }
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger: ".models-item",
          start: "top 600px",
          end: "bottom 620px"
        }
      } )
      .fromTo("#model-1", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-2", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
      .fromTo("#model-3", {
        opacity: 0,
        y: 160,
      }, {
        opacity: 1,
        y: 0
      })
    }, el)

    return (() => {
      gsap.killTweensOf(".models-item")
    })
  }, [])

  

  return (
    <div className="container">
      <header>
      <nav className="nav">
          <a href="#" className="logo">CHRMAX</a>
          <ul className="menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Meio</a></li>
            <li><a href="#">Fim</a></li>
          </ul>
        </nav>
      </header>
      <div className="first-content">
        <section id="first-item">
          <div className="for1 text1">
            <h2>Porque ter um apple watch?</h2>
            <p>Monitoramento da Saúde: O Apple Watch possui uma variedade de sensores que permitem monitorar sua saúde, incluindo frequência cardíaca, ECG (eletrocardiograma), oxigenação do sangue e atividade física. Ele pode ajudar a detectar problemas de saúde e oferecer insights sobre seu bem-estar.</p>
            <p>Atividade Física: O dispositivo é projetado para rastrear seus exercícios, contar passos, calcular calorias queimadas e oferecer lembretes para se manter ativo. Ele também incentiva os usuários a atingirem metas diárias de atividade física.</p>
          </div>
          <div className="button-content">
            <div id="button">
              <button className="btn">Visualizar</button>
              <button className="btn2">Mais</button>
            </div>
          </div>
          <div className="for1">
            <div id="card">
              <section className="card-item">
                <h5>Up to</h5>
                <span>39 K</span>
                <h5>Customers</h5>
              </section>
              <section className="card-item">
                <h5>Up to</h5>
                <span>182 K</span>
                <h5>Users</h5>
              </section>
              <section className="card-item">
                <h5>Up to</h5>
                <span>2 M</span>
                <h5>Views</h5>
              </section>
            </div>
          </div>
        </section>

        <div className="for2">
          <img src={relogio1tl} className="tl-init" alt="" />
        </div>
      </div>

      <section className="items">
        <div className="items-content">
          <img className="relogio" src={relogio1} alt="Relogio AppleWatch" />
        </div>
      </section>

      <section className="models-container">
        <h2 className="title">Qual é o Apple Watch ideal para você?</h2>

        <div className="models-content" ref={el}>
          <div className="models-item" id="model-1">
            <img src={relogio2} alt="Relogio Preto" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Series 8</h4>
            <p className="models-description">A partir de <strong>R$ 5.299</strong></p>
          </div>

          <div className="models-item" id="model-2">
            <img src={relogio3} alt="Relogio Rose" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">A partir de <strong>R$ 3.399</strong></p>
          </div>

          <div className="models-item" id="model-3">
            <img src={relogio4} alt="Relogio Ultra" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Ultra</h4>
            <p className="models-description">A partir de <strong>R$ 10.299</strong></p>
          </div>
        </div>

      </section>

      <section id="area-3">
        <div id="card2">
          <div className="item-left">
            <div className="card-item2">
              <h2>Sobre:</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat eligendi omnis! Facere dignissimos, expedita architecto nostrum suscipit velit nihil eaque in, aliquam commodi rerum sint enim praesentium illo eius?</p>
              <button className="button-card2">Visualizar</button>
            </div>
            <div className="card-item2">
              <h2>Como:</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione excepturi eveniet adipisci harum repellendus nulla ea odit, perferendis eligendi nobis et laborum tempore amet, distinctio sed itaque ipsam, quos tenetur?</p>
              <button className="button-card2">Visualizar</button>
            </div>
          </div>

        <section className="img-card2">
        <div className="items-content2">
        <img className="relogio2" src={relogio1} alt="Relogio AppleWatch" />
        </div>
      </section>

          <div className="item-right">
            <div className="card-item2">
              <h2>Porque:</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos tempore esse blanditiis delectus earum magni et id, nisi cum nobis amet, dolorum harum obcaecati dignissimos debitis atque necessitatibus iure neque.</p>
              <button className="button-card2">Visualizar</button>
            </div>
            <div className="card-item2">
              <h2>Motivos:</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ad quo sit illo corporis cum. Veniam sequi porro quas amet, velit itaque vel nihil aliquam necessitatibus animi minima eaque labore!</p>
              <button className="button-card2">Visualizar</button>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
          <div className="footer-item">
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Quem somos</a></li>
            </ul>
            <ul>
              <li><a href="#">Contato</a></li>
            </ul>
            <ul>
              <li><a href="#">Local</a></li>
            </ul>
          </div>
          <div className="footer-item">
          <h3>Serviços</h3>
          <ul>
              <li><a href="#">Veja mais</a></li>
            </ul>
            <ul>
              <li><a href="#">Informações</a></li>
            </ul>
            <ul>
              <li><a href="#">Assistência</a></li>
            </ul>
          </div>
          <div className="footer-item">
          <h3>Informações</h3>
          <ul>
              <li><a href="#">Agência</a></li>
            </ul>
            <ul>
              <li><a href="#">email</a></li>
            </ul>
            <ul>
              <li><a href="#">Saiba mais</a></li>
            </ul>
          </div>
          <div className="input-area">
            <h3>Para mais Informações, digite seu email</h3>
            <div className="input-item">
              <form action="">
                <input type="text" required />
                <div className="input-hover">Digite seu email</div>
              </form>
            </div>
          </div>
      </footer>
    </div>
  )
}