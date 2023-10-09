
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function EditarProdutos() {

    const {id} = useParams();
    //age diretamente no request gerado um cabecalho com varias informações
    //ele intercepta apenas a informação id, destructuring o request 

    document.title = "Editar Produtos " + id;

    const[produto, setProduto] = useState({})

    //Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];



    //Criar uma estratégia para recuperar o produto da API-JSON com fetch, utilizando GET:

    useEffect(()=>{

      fetch(`http://localhost:5000/produtos${id}`)
      .then((response)=> response.json())
      .then((response)=> setProduto(response))
      .catch(error=> console.log(error))


    },[id]);
    //usar o id para monitorar o id, ver se mudou para ai sim executar o codigo que esta aqui dentro



    //Versao 18.4, eles incluiram um loop a  mais na funcao useEffect,ele executa duas vezes so para ter certeza
    //para isso precisa de uma condição, precisa estar no strict mode 

    const handleChange = (e)=>{

      //Destructuring
      const {name,value} = e.target; //Nosso target eh o input, tem varias propriedades no input, mas eu so quero o name e o value


      if(name == "nome"){
        setProduto({[name]:value,"desc":"","preco":""});
      }else if(name == "desc"){
        setProduto({"nome":"",[name]:value,"preco":""});
      }else if(name == "preco"){
        setProduto({"nome":"","desc":"",[name]:value});
      }
      

    }




  return (
    <div>
        <h1>Editar Produtos</h1>
          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <div>
                  <label htmlFor="">Nome:</label>
                  <input type="text" name="nome" placeholder="Digite o nome do Produto." value={produto.nome} onChange={handleChange}/> 
                </div> 
                <div>
                  <label htmlFor="">Descrição:</label>
                  <input type="text" name="desc" placeholder="Digite a descrição do Produto." value={produto.desc}  onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" name="preco" placeholder="Digite o preço do Produto." value={produto.preco}  onChange={handleChange}/>
                </div>
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>

    </div>
  )
}

//  onChange={(e)=> setProduto(e.target.value)}
//serve para pegar o valor e poder editar tranquilamente ele muda o valor dele mesmo e vai mandando para atualizar
// Primeira forma de input com useState 
