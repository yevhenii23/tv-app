import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyList extends Component {

    handleAbout = (element) => {
        this.props.aboutInformation(element);
    }
    render() {
        const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';
        const { getShow, favorites } = this.props;

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
                                            <Button style={{width:'100%'}}>
                                                More... <FaArrowAltCircleRight/>
                                            </Button>
                                        </Link>
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

const mapStateToProps = store => {
    console.log(store)
   
    return {
        favorites:store.movieList.favorites,
        getShow: (showId) => store.movieList.fetchedList.find(show=>show.id == showId),
    

    }
};

export default connect(mapStateToProps)(MyList);