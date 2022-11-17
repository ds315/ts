
import {createRoot} from 'react-dom/client';
import './index.css';

import AsuPage from './pages/asu';
import MesPage from './pages/mes';

import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';

import { Provider } from 'react-redux';
import {store} from './store';

function App()
{
	return <Provider store={store}>
		<HashRouter>
			<NavBar/>
			<Routes>
				<Route path='*' element={<AsuPage/>} />
				<Route path='/mes' element={<MesPage/>} />
			</Routes>
		</HashRouter>
	</Provider>
}

createRoot(document.getElementById('root')).render(<App/>);
