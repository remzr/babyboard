export function ButtonBig({firstLine, secondLine}) {

  return (
        <button className="big"><strong>{firstLine}</strong><br />{secondLine}<br /><span className="subtext">2h 30min</span></button>
    )
}

export function ButtonSmall({firstLine}) {

  return (
        <button className="small"><strong>{firstLine}</strong></button>
    )
}