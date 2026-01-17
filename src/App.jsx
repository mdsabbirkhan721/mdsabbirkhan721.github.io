import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import Footer from './components/Footer';
import Men from './components/Men';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import ConfirmOrder from './components/ConfirmOrder';
import OrderSuccess from './components/OrderSuccess';
import UserProfile from './components/UserProfile';
import OrderHistory from './components/OrderHistory';
import Contact from './components/Contact';
import Hoodie from './components/Hoodie';
import Shirt from './components/Shirt';
import TShirt from './components/TShirt';
import Punjabi from './components/Punjabi';
import SearchResults from './components/SearchResults';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/man" element={<Men />} /> */}
            <Route path="/hoodie" element={<Hoodie />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/tshirt" element={<TShirt />} />
            <Route path="/punjabi" element={<Punjabi />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />

            <Route path="/login" element={<LoginSignup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
