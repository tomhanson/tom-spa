import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Routes from './utils/routes';

ReactDOM.render(Routes, document.getElementById('root') );
registerServiceWorker();