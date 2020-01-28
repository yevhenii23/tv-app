import React from 'react';
import { Component } from 'react';
import './MovieList.scss';
import { FaArrowAltCircleRight} from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button, Spinner
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { fetchMovies, addToFavorites, changeSearchText } from '../../store/actions';

const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';

 class MovieList extends Component {

    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render () {
        const { loading, movies } = this.props;

        if (loading) {
            return <div className='spinner-wraper'>
                    <Spinner style={{ width: '20rem', height: '20rem', }}/>
                </div>
        }

        return (
        <div className="main" >
            {
            movies
                .map((element) => 
                    <div key={element.id} className='column'>
                        <Card style={{ height:'470px'}}>
                            <CardImg alt={element.name} src={element.image?element.image.medium : NoImage}></CardImg>
                            <CardBody>
                                <CardTitle className="title">{element.name}</CardTitle>
                                <CardSubtitle>{element.season}</CardSubtitle>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Link to={`/about/${element.id}`}>
                                                <Button style={{width:'100px'}}>
                                                    More... <FaArrowAltCircleRight/>
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Button onClick={() => this.props.addToMyList(element.id)}>
                                                <MdFavorite/>
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

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

const mapStateToProps = ({ list, favorites, loading }) => {
    return {
        loading,
        movies: list,
        favorites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(fetchMovies()),
        addToMyList: (id) => dispatch(addToFavorites(id)),
        chnageSearch: (text) => dispatch(changeSearchText(text)),
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);