import { ButtonBig } from "./Button"

function InputSection({newEntry, lastPoop, lastPee, lastFood}) {

  return (
    <div id="inputSection">
        <ButtonBig 
          firstLine="Diaper" 
          secondLine="Poop" 
          newEntry={newEntry} 
          id="timerPoop"
          lastEvent={lastPoop}
        />
        <ButtonBig 
          firstLine="Diaper" 
          secondLine="Pee" 
          newEntry={newEntry} 
          id="timerPee"
          lastEvent={lastPee}
        />
        <ButtonBig 
          firstLine="Food" 
          secondLine="Bottle" 
          newEntry={newEntry} 
          id="timerFood"
          lastEvent={lastFood}
        />
    </div>
    )
}

export default InputSection