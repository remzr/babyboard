import { ButtonBig, ButtonSmall } from "./Button"

function InputSection() {

  return (
    <div id="inputSection">
        <ButtonBig firstLine="Diaper" secondLine="Poop" />
        <ButtonBig firstLine="Diaper" secondLine="Pee" />
        <ButtonSmall firstLine="Vomit" />
        <ButtonSmall firstLine="Fever" />
    </div>
    )
}

export default InputSection