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