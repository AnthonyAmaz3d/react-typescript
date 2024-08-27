import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá, meu nome é Anthony Maia Dolberth, sou estudante da PUC-PR e faço o
      curso livre da EBAC de desenvolvimento full stack java, gosto de codar em
      Java, mas tenho uma base sólida em front end com JS, gosto de
      astronomia/astrofísica, jogos, mangá, matemática e rap. Algumas das
      habilidades que possuo são: Git | GitHub | Java | IntelliJ IDEA |
      JavaScript | HTML | CSS | Python | Estrutura de dados| Algoritmos |
      React.js | Vue.js | Padrões de projeto de software| Banco de Dados |
      Comunicação | Inglês – intermediário | Resolução de problemas.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=anthonyamaz3d&show_icons=true&theme=dracula" />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=anthonyamaz3d&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false"
        alt="languages graph"
      />
    </GithubSecao>
  </section>
)

export default Sobre
