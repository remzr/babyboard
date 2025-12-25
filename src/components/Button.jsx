export function ButtonBig({firstLine, secondLine}) {

  return (
        <button className="big"><strong>{firstLine}</strong><br />{secondLine}</button>
    )
}

export function ButtonSmall({firstLine}) {

  return (
        <button className="small"><strong>{firstLine}</strong></button>
    )
}