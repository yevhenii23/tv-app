import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const About = ({ getShow }) => {
    const { showId } = useParams();
    const { name,summary } = getShow(showId) || {};
    return ( 
    <div>
        <h1>About</h1>
        <h2>{`Series: ${name}`}</h2>
        <div dangerouslySetInnerHTML={ { __html: summary }} />
    </div>
    )
}


About.propTypes = {
    getShow: PropTypes.func.isRequired,
    
}

const mapStateToProps = store => {
    return {
        getShow: (showId) => store.movieList.fetchedList.find(show=>show.id == showId)
    }
}

export default connect (mapStateToProps)(About);