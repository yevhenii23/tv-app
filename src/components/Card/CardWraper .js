import React from "react";
import {Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import { FaArrowAltCircleRight} from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import './CardWraper.scss';
import {addToFavorites, changeSearchText, fetchMovies} from "../../store/actions";
import {connect} from "react-redux";


function CardWraper ({movies, index, addToMyList}) {
    return <div className='card-wraper' >
        <Card>
            <CardImg  className="image" alt={movies[index].name} src={movies[index].image && movies[index].image.original}/>
            <CardBody>
                <CardTitle className="title">{movies[index].name}</CardTitle>
                <Container>
                    <Row>
                        <Col>
                            <Link to={`/about/${movies[index].id}`}>
                                <Button style={{width:'100px'}}>
                                    More... <FaArrowAltCircleRight/>
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Button onClick={() => addToMyList(movies[index].id)}>
                                <MdFavorite/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    </div>
}



const mapStateToProps = ({ list, favorites, loading }) => {
    return {
        loading,
        list,
        favorites,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(fetchMovies()),
        addToMyList: (id) => dispatch(addToFavorites(id)),
        changeSearch: (text) => dispatch(changeSearchText(text)),
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(CardWraper);
