import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import './MovieList.scss';
import { FaArrowAltCircleRight} from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  


export default class MovieList extends Component {
    state = {
        movies: [],
    };

    componentDidMount1() {
        axios.get('http://api.tvmaze.com/shows')     
        .then(res => {
            console.log(res.data)
            this.setState({movies:res.data})
        })
    }

    async componentDidMount() {
        const { data: movies } = await axios.get('http://api.tvmaze.com/shows');
        this.setState({ movies });
        console.log(movies);
    }

 
    render () {
        const  { movies } = this.state;   
        const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';
        return (
        <div className="main" >
            {movies
            .map(({name,image,season,id}) => 
            <div key={id} className='column'>
                <Card style={{width:'250px', height:'470px'}}>
                    <CardImg alt={name} src={image?image.medium : NoImage}></CardImg>
                    <CardBody>
                        <CardTitle className="title">{name}</CardTitle>
                        <CardSubtitle>{season}</CardSubtitle>
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