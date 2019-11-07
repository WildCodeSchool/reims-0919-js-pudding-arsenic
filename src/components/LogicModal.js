import {useState} from 'react'

const LogicModal = ()=>{
    const [revele, changeRevele] = useState(false)

    function toggle(){
        changeRevele(!revele)
    }
    return {
        revele, 
        toggle
    }
}

export default LogicModal

class Modal extends React.Component {
    constructor() {
        this.state = {
            revele: false,
        }
    }

    toggleModal() {
        this.setState({revele: !this.state.revele})
    }
}