import database from '../api/index';

// ADD_DEVELOPER
export const addDeveloper = (developer) => ({
  type: 'ADD_DEVELOPER',
  developer
});

export const startAddDeveloper = (developerData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      roles = '',
      projects = '',
      availableDate = 0
    } = developerData;
    const developer = { name, roles, projects, availableDate };

    return database.ref('developers').push(developer).then((ref) => {
      dispatch(addDeveloper({
        id: ref.key,
        ...developer
      }));
    });
  };
};

// REMOVE_DEVELOPER
export const removeDeveloper = ({ id } = {}) => ({
  type: 'REMOVE_DEVELOPER',
  id
});

// EDIT_DEVELOPER
export const editDeveloper = (id, updates) => ({
  type: 'EDIT_DEVELOPER',
  id,
  updates
});

// SET_DEVELOPER
export const setDevelopers = (developers) => ({
  type: 'SET_DEVELOPER',
  developers
});

export const startSetDevelopers = () => {
  return (dispatch) => {
    return database.ref('developers').once('value').then((snapshot) => {
      const developers = [];

      snapshot.forEach((childSnapshot) => {
        developers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setDevelopers(developers));
    });
  };
};
