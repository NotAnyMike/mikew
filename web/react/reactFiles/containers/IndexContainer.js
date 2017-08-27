import AppView from '../components/AppView';
import Index from '../components/index';
import {Container} from 'flux/utils';
import WsStore from '../data/wsStore';

function getStores() {
  return [
    WsStore,
  ];
}

function getState() {
  return {
    todos: WsStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);
