import { combineReducers } from 'redux';
import _auth from './_auth';
import _device from './_device';
import _messages from './_messages';
import _content from './_content';

export default combineReducers({ _auth, _device, _messages, _content });
