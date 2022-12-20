import './main.scss';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout';
import { ThemeProvider } from 'react-bootstrap';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import registerServiceWorker from './sw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider dir='rtl'>
        <Layout>
            <App />
        </Layout>
    </ThemeProvider>
);


//Register service worker
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
