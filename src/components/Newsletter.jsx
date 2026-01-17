const Newsletter = () => {
  return (
    <div className="container my-5 newsletter ">
      <div className="text-center my-5">
        <h1>GET EXCLUSIVE NEWS ON YOUR EMAIL </h1>
        <h4>Subscribe to our newsletter and stay updated</h4>
      </div>

      <div className="  row ">
        <form className="d-flex">
          <div className="col-8 col-md-10 col-lg-10 col-xl-10">
            <input
              type="email"
              className="form-control border border-3 border-dark rounded-pill py-3"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="col-4 col-md-2 col-lg-2 col-xl-2">
            <button
              className="btn btn-dark rounded-pill w-100 py-3 "
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
