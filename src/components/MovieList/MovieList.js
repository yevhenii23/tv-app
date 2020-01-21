import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import './MovieList.scss';
import { FaArrowAltCircleRight} from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import {
    Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  


export default class MovieList extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        axios.get('http://api.tvmaze.com/shows')     
        .then(res => {
            console.log(res.data)
            this.setState({movies:res.data})
        })
    }

 
    render () {
        const  { movies } = this.state;   
        const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';
        return (
        <div className="main" >
            {movies.map(movie => 
           
            <div key={movie.id} className='column'>
                <Card style={{width:'250px', height:'470px'}}>
                    <CardImg alt={movie.name} src={movie.image?movie.image.medium : NoImage}></CardImg>
                    <CardBody>
                        <CardTitle className="title">{movie.name}</CardTitle>
                        <CardSubtitle>{movie.season}</CardSubtitle>
                        <Container>
                            <Row>
                                <Col>
                                    <Button style={{width:'100px'}}>
                                         More... <FaArrowAltCircleRight/>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button>
                                        <MdFavorite/>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>)}
        </div>);
    }
}