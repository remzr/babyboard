import { ButtonBig, ButtonSmall } from "./Button"

function OutputSection() {

  return (
    <div id="outputSection">
        <ButtonBig firstLine="Food" secondLine="Bottle" />
        <ButtonBig firstLine="Nasivin" secondLine="Nosespray" />
        <ButtonSmall firstLine="Algifor" />
        <ButtonSmall firstLine="Fever" />
    </div>
    )
}

export default OutputSection