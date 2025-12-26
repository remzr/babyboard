import { ButtonBig } from "./Button"

function OutputSection({newEntry}) {

  return (
    <div id="outputSection">
        <ButtonBig firstLine="Nasivin" secondLine="Nosespray" newEntry={newEntry} id="timerNose" />
        <ButtonBig firstLine="Algifor" secondLine="Siroup" newEntry={newEntry} id="timerAlgifor"/>
        <ButtonBig firstLine="Dafalgan" secondLine="Supo" newEntry={newEntry} id="timerDafalgan"/>

    </div>
    )
}

export default OutputSection