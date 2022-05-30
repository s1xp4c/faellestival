import React from 'react'

function LineupCard(props) {
  return (
    <div className="lineupCard">
        <CardTitle />
        
        </div>
  )
}

{/* <div className={props.cardClass}>
<CardTitle className="ticketTitle" head={props.head} />
<section className={props.contentClass}>
  <CardContent
    content={props.content}
    price={props.price}
  />
  {props.soldOut ? (
    <Btn className="inactive out" content="Sold Out" />
  ) : (
    <Btn
      className="primBtn out"
      action={openForm}
      content="Get Your Ticket"
    />
  )}
</section>
</div> */}

export default LineupCard