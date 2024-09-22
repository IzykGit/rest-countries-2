import { motion } from "framer-motion"
import { useState } from "react"
import { dropVariants } from "../resources/framer-variants"

import DropStyles from "../styles/components/DropDown.module.css"

const DropDown = () => {

    const [selected, setSelected] = useState("Select...")
    const [dropState, setDropState] = useState(false)



    return (
        <>  
            <div className={DropStyles.drop_selector}>
                <button type="button" value={selected} onClick={() => setDropState(!dropState)}>{selected}</button>
            </div>
            <motion.div animate={dropState ? "open" : "closed" } variants={dropVariants} className={DropStyles.dropdown} initial={false}>
                <button type="button" value={"Placeholder"} onClick={(e) => setSelected(e.target.value)}>Placeholder</button>
                <button type="button" value={"Placeholder 2"} onClick={(e) => setSelected(e.target.value)}>Placeholder 2</button>
                <button type="button" value={"Placeholder 3"} onClick={(e) => setSelected(e.target.value)}>Placeholder 3</button>
            </motion.div>
        </>

    )
}

export default DropDown
