import React from 'react';
import { Component } from 'react';
import './MovieList.scss';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies, addToFavorites, changeSearchText } from '../../store/actions';
import { List, AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';
import CardWraper from '../Card/CardWraper ';


 class MovieList extends Component {

    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    _rowRender = ({ index, key, style }) => {
        const { movies, addToMyList } = this.props;
            return (
                <div style={style} key={key} className='test'>
                    <CardWraper movies={movies} index={index*3} addToMyList={addToMyList} />
                    <CardWraper movies={movies} index={index*3+1} addToMyList={addToMyList} />
                    <CardWraper movies={movies} index={index*3+2} addToMyList={addToMyList} />
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
                        rowCount={movies.length/3}
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
};

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(fetchMovies()),
        addToMyList: (id) => dispatch(addToFavorites(id)),
        changeSearch: (text) => dispatch(changeSearchText(text)),
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);