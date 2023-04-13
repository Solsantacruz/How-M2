import React from "react";


class Botones extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button  onClick={(props)=> alert('Aprobado')}>Módulo 1</button>
                <button  onClick={(props)=> alert('En curso')}>Módulo 2</button>
            </div>

        )
    }

}

export default Botones;