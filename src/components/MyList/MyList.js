import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import './MyList';
import { deleteFromFavorites } from '../../store/actions';

const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';

class MyList extends Component {

    render() {        
        const { getShow, favorites, deleteId } = this.props;

        return (<div>{
        favorites
            .map(id => getShow(id))
            .map((element) => 
                <div key={element.id} className='column'>
                    <Card style={{width:'250px', height:'470px'}}>
                        <CardImg alt={element.name} src={element.image?element.image.medium : NoImage}></CardImg>
                        <CardBody>
                            <CardTitle className="title">{element.name}</CardTitle>
                            <CardSubtitle>{element.season}</CardSubtitle>
                            <Container>
                                <Row>
                                    <Col>
                                        <Link to={`/about/${element.id}`}>
                                            <Button size="sm" block> 
                                                More <FaArrowAltCircleRight/>
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Button size="sm" color="danger" block  onClick={() => deleteId(element.id)}> 
                                            delete
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
       
        )}
        </div>);
    }
}

const mapStateToProps = ({ favorites, list }) => {
    return {
        favorites,
        getShow: (showId) => list.find(show=>show.id == showId),
        

    }
};

const mapDispatchToProps = dispatch => {

    return {
        deleteId: (id) => dispatch(deleteFromFavorites(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MyList);