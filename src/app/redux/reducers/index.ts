import { combineReducers } from 'redux';
import { homeReducer } from './home.reducer';

export interface IAppState {
  home: any;
};

export default combineReducers<IAppState>({
  home: homeReducer,
});
