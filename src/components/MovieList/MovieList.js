import React from 'react';
import { Component } from 'react';
import './MovieList.scss';
import { FaArrowAltCircleRight} from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { getAllMovies, addToFavorites,getSearchMovies } from '../../store/actions';


 class MovieList extends Component {

    componentDidMount() {
        const { getListOfMovies, getFilteredList} = this.props;
        let InputValue = window.localStorage.getItem('setInputValue')
        InputValue > 2 ? getListOfMovies() : getFilteredList(InputValue)
    }

    render () {
        const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';
        return (
        <div className="main" >
            {
            this.props.movies
            .map((element) => <div key={element.id} className='column'>
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

const mapStateToProps = store => {
    console.log(store)
    return {
        movies: store.movieList.fetchedList,
        favorites:store.movieList.favorites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListOfMovies: () => dispatch(getAllMovies()),
        addToMyList: (id) => dispatch(addToFavorites(id)),
        getFilteredList: (search) => dispatch(getSearchMovies(search))
    
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);