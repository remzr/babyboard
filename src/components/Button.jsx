export function ButtonBig({id, firstLine, secondLine, newEntry}) {

  return (
        <button id={id} className="big" onClick={newEntry}><strong>{firstLine}</strong><br />{secondLine}<br /><span className="subtext">2h 30min</span></button>
    )
}