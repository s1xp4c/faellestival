import React from 'react'
import Btn from './Btn';
import CardContent from './CardContent';

function PlayingCard(props) {
  // <PlayingCard className="playCard" btnContent={stages[0]} action={goToProgram} content={nowJotunheim} />
console.log(props.content);
// act: "Parisian Inc"
// end: "14:00"
// start: "12:00"
  return (
    <div className={props.className}>
      <div className="playTitle">
      <Btn content={props.btnContent} action={props.action} className={props.btnClassName} id="out-up"  />
      </div>
      <CardContent className="cardContent" playStart={props.content.start} playEnd={props.content.end} contentClassName="subText" actContent={props.content.act} actClassName="gradientTxt" />

    </div>
  )
}



export default PlayingCard