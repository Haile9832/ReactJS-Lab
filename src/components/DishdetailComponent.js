import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
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
function RenderComments({ comments }) {
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
const DishDetail = (props) => {
  console.log(props)
  if (props.dish != null) {
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish selectedDish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
