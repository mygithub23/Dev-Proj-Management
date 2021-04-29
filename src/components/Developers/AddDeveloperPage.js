import React from 'react';
import { connect } from 'react-redux';
import DeveloperForm from './DeveloperForm';
import { editDeveloper, removeDeveloper } from '../actions/developers';

export class EditDeveloperPage extends React.Component {
  onSubmit = (developer) => {
    this.props.editDeveloper(this.props.developer.id, developer);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeDeveloper({ id: this.props.developer.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <DeveloperForm
          developer={this.props.developer}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  developer: state.developers.find((developer) => developer.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editDeveloper: (id, developer) => dispatch(editDeveloper(id, developer)),
  removeDeveloper: (data) => dispatch(removeDeveloper(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDeveloperPage);
