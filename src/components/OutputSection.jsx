import { ButtonBig } from "./Button"

function OutputSection({newEntry, lastNasivin, lastAlgifor, lastDafalgan}) {

  return (
    <div id="outputSection">
        <ButtonBig 
          firstLine="Nasivin" 
          secondLine="Nosespray" 
          newEntry={newEntry} 
          id="timerNose"
          lastEvent={lastNasivin} 
        />
        <ButtonBig 
        firstLine="Algifor" 
        secondLine="Siroup" 
        newEntry={newEntry} 
        id="timerAlgifor"
        lastEvent={lastAlgifor}
      />
        <ButtonBig 
          firstLine="Dafalgan" 
          secondLine="Supo" 
          newEntry={newEntry} 
          id="timerDafalgan"
          lastEvent={lastDafalgan}
        />

    </div>
    )
}

export default OutputSection