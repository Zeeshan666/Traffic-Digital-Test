import React from "react";
import { Link } from "react-router-dom";
import RouteConstants from "../../../Routes/RoutesConstant.js";
const Index = () => {
  return (
    <div className="error-page">
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center m-5 p-5">
              <img
                src="./images/error.png"
                alt="Error"
                className="img-fluid error-img"
              />
              <h1>Sorry, this page isn't available.</h1>
              <p>
                The link you followed may be broken, or the page may have been
                removed.
              </p>
              <Link
                to={RouteConstants.homePage}
                className="btn btn-primary mt-4"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
