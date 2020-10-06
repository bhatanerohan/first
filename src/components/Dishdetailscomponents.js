import React from 'react';
import { Media, Card, CardImg, CardText, CardBody } from 'reactstrap';


const Dishdetail = (props) => {
    if ((props.dish === null) || (props.dish === undefined)) {
        return (
            <div></div>
        );
    }
    else {
        const comments = props.dish.comments.map((com) => {
            return (
                <ul className='list-unstyled'>
                    <li key={com.id}>
                        {com.comment}<br />
                        -- {com.author}, {(com.date).slice(0, 10)}
                    </li>
                </ul>
            );
        });


        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card key={props.dish.id}>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <Media heading>{props.dish.name}</Media>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <Media body>
                            <Media heading>Comments</Media>
                            {comments}
                        </Media>
                    </div>
                </div>
            </div>
        );
    }

}


export default Dishdetail;