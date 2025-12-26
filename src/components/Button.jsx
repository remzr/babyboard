export function ButtonBig({id, firstLine, secondLine, newEntry, lastEvent}) {

  return (
        <button 
          id={id} 
          className="big" 
          onClick={newEntry}>
          
          <strong>{firstLine}</strong>
          <br />{secondLine}<br />
          <span 
            className="subtext">{lastEvent}
          </span>
        </button>
    )
}