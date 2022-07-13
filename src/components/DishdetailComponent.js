import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function RenderDish({ selectedDish }) {
  return (
    <Card>
      <CardImg top src={selectedDish.image} alt={selectedDish.name} />
      <CardBody>
        <CardTitle>{selectedDish.name}</CardTitle>
        <CardText>{selectedDish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({comments}) {
  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author} {dateFormat(comment.date, "dd/mm/yyyy")}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
const Dishdetail = (props) => {
  if (props.selectedDish != null) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish selectedDish={props.selectedDish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.selectedDish.comments}/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dishdetail;
