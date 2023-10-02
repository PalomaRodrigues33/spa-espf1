
import { useParams } from 'react-router-dom'

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "Editar Produtos " + id;

    //Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id));
    // const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];


  return (
    <div>
        <h1>Editar Produtos</h1>
          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <div>
                  <label htmlFor="">Nome:</label>
                  <input type="text" name="nome" placeholder="Digite o nome do Produto."/>
                </div>
                <div>
                  <label htmlFor="">Descrição:</label>
                  <input type="text" name="desc" placeholder="Digite a descrição do Produto."/>
                </div>
                <div>
                  <label htmlFor="">Preço:</label>
                  <input type="text" name="preco" placeholder="Digite o preço do Produto."/>
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
