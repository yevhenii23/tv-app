import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import  './About.scss';

const About = ({ getShow }) => {
    const { showId } = useParams();
    const { name,summary,image } = getShow(showId) || {};
    return ( 
    <div className="about-wraper">
        <h1>About</h1>
        <div className='content-wraper'>
        <div>
            <img alt={name} src={image.medium} ></img>
        </div>
        <div>
            <h2>{`Series: ${name}`}</h2>
            <div dangerouslySetInnerHTML={ { __html: summary }} />
        </div>
        </div>
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