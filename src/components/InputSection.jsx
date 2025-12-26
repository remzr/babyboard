import { ButtonBig } from "./Button"

function InputSection({newEntry}) {

  return (
    <div id="inputSection">
        <ButtonBig firstLine="Diaper" secondLine="Poop" newEntry={newEntry} id="timerPoop"/>
        <ButtonBig firstLine="Diaper" secondLine="Pee" newEntry={newEntry} id="timerPee"/>
        <ButtonBig firstLine="Food" secondLine="Bottle" newEntry={newEntry} id="timerFood"/>
    </div>
    )
}

export default InputSection