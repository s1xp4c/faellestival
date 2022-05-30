import React from 'react'

/* <div className="cardInfo">
<p>{props.content}</p> */
function CardContent(props) {
  return (

<div className={props.className}>
{props.playStart && <p className={props.className}>From {props.playStart} until {props.playEnd} </p>}
{props.content && <p className={props.contentClassName} >{props.content}</p>}
{props.actContent && <p className={props.actClassName}>{props.actContent}</p>} 
{props.content2 && <p className="cardContent2" >{props.content2}</p>}
{props.price && <p className='cardPrice'>From {props.price}kr.</p>}
</div>
  )
}

{/* <div className="playTitle">
<Btn content={props.btnContent} action={props.action} className={props.btnClassName} id="out-up"  />
</div>
<CardContent className="cardContent" playStart={props.start} playEnd={props.end} contentClassName="subText" content2={props.act} content2ClassName="playAct" /> */}


export default CardContent