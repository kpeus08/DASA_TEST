import { useState } from "react"
import { LeftMenuSummary } from "./LeftMenuSummary"
import { LeftMenuDetailed } from "./LeftMenyDetailed"

export function LeftMenu () {
    const [detailed, SetDetailed] = useState(false)

    function ToggleDetailed(value:boolean){
        SetDetailed(value)
    }
    return (
        <div>
            {detailed && <LeftMenuDetailed clickFunction = {ToggleDetailed}/>}
            {!detailed && <LeftMenuSummary clickFunction = {ToggleDetailed}/>}
        </div>
    )
}