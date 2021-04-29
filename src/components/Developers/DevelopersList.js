import React from 'react';
import { connect } from 'react-redux';
import DeveloperListItem from './DeveloperListItem';
import selectDevelopers from '../selectors/developers';

export const DeveloperList = (props) => (
  <div>
    {
      props.developers.length === 0 ? (
        <p>No developers</p>
      ) : (
          props.developers.map((developer) => {
            return <DeveloperListItem key={developer.id} {...developer} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    developers: selectDevelopers(state.developers, state.filters)
  };
};

export default connect(mapStateToProps)(DeveloperList);
