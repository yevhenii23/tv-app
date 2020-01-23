import React from 'react';
import { connect } from 'react-redux';


 class About extends React.Component {

    DynamicHTML = () => {
        let html = this.props.about.summary;
        return <div dangerouslySetInnerHTML={ { __html: html}} />;
      }
      

    render() {
        console.log(this.props.about)
        const { name } = this.props.about
        return (<div>
            <h1>About</h1>
            <h2>{name?`Series: ${name}`:''}</h2>
            <this.DynamicHTML></this.DynamicHTML>
        </div>);
    }
}
const mapStateToProps = store => {
    return {
        about:store.movieList.about,
    }
}

export default connect(mapStateToProps)(About)