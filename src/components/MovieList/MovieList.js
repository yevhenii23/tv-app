import React from 'react';
import { Component } from 'react';
import './MovieList.scss';
import { FaArrowAltCircleRight} from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import {
    Container,Row,Col,Card, CardImg,CardBody,
    CardTitle, Button, Spinner
  } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { fetchMovies, addToFavorites, changeSearchText } from '../../store/actions';
import { List, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';



const NoImage = 'http://www.noemiaalugueis.com.br/assets/images/no-image.png';

 class MovieList extends Component {

    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    _rowRender = ({ index, key, style }) => {
        const { movies, addToMyList } = this.props;
            return (
                <div  className='column' key={key} style={style}>
                    <Card>
                        <CardImg  className="image" alt={movies[index].name} src={movies[index].image.original}/>
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
            )

        ;
    };


    render () {
        const { loading, movies } = this.props;

        if (loading) {
            return <div className='spinner-wraper'>
                    <Spinner style={{ width: '20rem', height: '20rem', }}/>
                </div>
        }

        return (
            <AutoSizer>
                {({width, height}) => (
                    <List
                        rowHeight={450}
                        overscanRowCount={20}
                        rowCount={movies.length}
                        rowRenderer={this._rowRender}
                        width={width}
                        height={height}

                    />
        )}
    </AutoSizer>

        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};

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