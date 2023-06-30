//import { login } from './login';
import { LocalStorageMock } from '../../storage/localStorageMock';

global.fetch = new LocalStorageMock();
