import App from '../components/App';
import {Container} from 'flux/utils';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

function getStores() {
  return [
    AppStore,
  ];
}

/*function calculateState(prevState) {
    return {
      value: AppStore.getState(),
    };
}*/

function getState() {
  return {
    appstore: AppStore.getState(),
    getActiveButton: AppStore.getActiveButton,

    onButtonClick: AppActions.buttonClicked,
   /* onDeleteTodo: TodoActions.deleteTodo,
    onEditTodo: TodoActions.editTodo,
    onStartEditingTodo: TodoActions.startEditingTodo,
    onStopEditingTodo: TodoActions.stopEditingTodo,
    onToggleAllTodos: TodoActions.toggleAllTodos,
    onToggleTodo: TodoActions.toggleTodo,
    onUpdateDraft: TodoActions.updateDraft,*/
  };
}

export default Container.createFunctional(App, getStores, getState);