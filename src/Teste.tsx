import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string //o sinal de ? serve para deixar de ser obrigatorio
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green ' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
// o pipe (||) está estabelecendo um valor padrão para caso não tenha o fontSize

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
  span {
    text-decoration: line-through;
  }
`
// estilo usado no SASS e agora sendo usado no styled-components

// o componente BotaoPerigo é mais especifico que a regra geral de principal, por isso sobrepõem e faz um efeito cascata como se fosse um arquivo css

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        {/* esse as serve para dizer que apesar de ser um botão e ser criado como botão ele se indentifica como tag a de link no html kkkkkk */}
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
