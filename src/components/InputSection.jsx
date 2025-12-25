import { ButtonBig, ButtonSmall } from "./Button"

function InputSection() {

  return (
    <div id="inputSection">
        <ButtonBig firstLine="Diaper" secondLine="Poop" />
        <ButtonBig firstLine="Diaper" secondLine="Pee" />
        <ButtonBig firstLine="Food" secondLine="Bottle" />
    </div>
    )
}

export default InputSection