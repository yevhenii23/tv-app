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
import { getAllMovies, addToFavorites, addAboutInfo } from '../../store/actions';


 class MovieList extends Component {

    componentDidMount() {
      this.props.getListOfMovies()
    }
   
    addToFavorite = (element) => {
       let favorites = this.props.favorites;
       let favoritesId = favorites.map(fav=>fav.id)
        console.log(favoritesId)
       if (!favoritesId.includes(element.id)) {
        this.props.addMyList(element)
       }
        console.log(element)
    }
    handleAbout = (element) => {
        console.log('click')
        this.props.aboutInformation(element);
    }

    render () {
        const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';
        return (
        <div className="main" >
            {
            this.props.movies
            .map((element) => <div key={element.id} className='column'>
            <Card style={{width:'250px', height:'470px'}}>
                <CardImg alt={element.name} src={element.image?element.image.medium : NoImage}></CardImg>
                <CardBody>
                    <CardTitle className="title">{element.name}</CardTitle>
                    <CardSubtitle>{element.season}</CardSubtitle>
                    <Container>
                        <Row>
                            <Col>
                                <Link to='./about'>
                                    <Button style={{width:'100px'}} onClick={()=>this.handleAbout(element)}>
                                        More... <FaArrowAltCircleRight/>
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button onClick={() => this.addToFavorite(element)}>
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
        addMyList: (element) => dispatch(addToFavorites(element)),
        aboutInformation:(element) => dispatch(addAboutInfo(element))

    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);