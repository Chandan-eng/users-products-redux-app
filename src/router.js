
import DashBoard from './Compontents/DashBoard';
import AddProduct from './Pages/Products/AddProduct';
import ProductDashBoard from './Pages/Products/ProductDashboard';

const routes = [
    { path: '/', element: <DashBoard /> },
    { path: '/product-dashboard', element: <ProductDashBoard /> },
    {path: '/add-products', element: <AddProduct />},
    {path: '*', element: <h1>404 Not Found</h1>}
  
];

export default routes;
