import React from "react"

export default function Die(props){
    

    function styles(){
        return {
            backgroundColor: props.isheld ? "#59E391" : "white"
        }
    }
    return (
        <button style={styles()} className="button" onClick={props.hold}>{props.value}</button>
    //      <button style={styles()} className="button" onClick={()=>props.hold(props.id)}>{props.value}</button>
    )
}