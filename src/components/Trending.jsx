import styles from './Trending.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Trending = () => {
  const products = useSelector((state) => state.products.products);

  const trendingProducts = products.filter((item) => item.isTrending);
  const getCategoryRoute = (category) => {
    if (category === 'hoodie') return '/hoodie';
    if (category === 'shirt') return '/shirt';
    if (category === 'tshirt') return '/tshirt';
    if (category === 'punjabi') return '/punjabi';

    return '/';
  };

  return (
    <section className="services py-5">
      <div className="container">
        <div className="text-center my-5">
          <h1>
            Trending<span className="text-primary"> Collection</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>

        <div className="row">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className={'col-12 col-sm-6 col-md-6 col-lg-4'}
            >
              <div className={styles.card}>
                <div className="imageBox">
                  <img
                    src={product.image}
                    alt={product.item_name}
                    className="img-fluid"
                  />
                </div>
                <div className={styles.overlayer}>
                  <Link
                    to={getCategoryRoute(product.category)}
                    className="btn btn-outline-danger rounded-pill"
                  >
                    Check Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
