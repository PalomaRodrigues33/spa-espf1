import "./ModalAction.scss"

export default function ModalAction(props) {

    if(props.open){
        return (
            <div className="modal">
                <h1>MODAL</h1>
                <button onClick={()=>props.setClose(false)}>CLOSE-MODAL</button>
            </div>
        )
  }
}
