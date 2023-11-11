import React from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";

const Country = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Special Packages
          </h2>
          <p className="mt-2 text-gray-600">
            Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1 */}
          <Card>
            <CardBody>
              <img
                src="/p1.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Italy</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 5 days 6 nights
                </span>
                <i className="fa fa-angle-right"></i> 5-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">2544 reviews</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </CardBody>
          </Card>

          {/* 2 */}
          <Card>
            <CardBody>
              <img
                src="/p2.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Spain</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 7 days 8 nights
                </span>
                <i className="fa fa-angle-right"></i> 4-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">1876 reviews</span>
                </div>
                <Button color="teal">Book Now</Button>
              </div>
            </CardBody>
          </Card>

          {/* 3 */}
          <Card>
            <CardBody>
              <img
                src="/p3.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">France</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 6 days 5 nights
                </span>
                <i className="fa fa-angle-right"></i> 3-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">1235 reviews</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </CardBody>
          </Card>

          {/* 4 */}
          <Card>
            <CardBody>
              <img
                src="/p4.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Greece</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 6 days 7 nights
                </span>
                <i className="fa fa-angle-right"></i> 4-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">1892 reviews</span>
                </div>
                <Button color="teal">Book Now</Button>
              </div>
            </CardBody>
          </Card>
          {/* 5  */}
          <Card>
            <CardBody>
              <img
                src="/p5.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">India</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 6 days 7 nights
                </span>
                <i className="fa fa-angle-right"></i> 4-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">1892 reviews</span>
                </div>
                <Button color="teal">Book Now</Button>
              </div>
            </CardBody>
          </Card>
          {/* 6  */}
          <Card>
            <CardBody>
              <img
                src="/p6.jpg"
                alt="package-place"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Thailand</h3>
              <p className="text-gray-600 mb-4">
                <span className="mr-2">
                  <i className="fa fa-angle-right"></i> 6 days 7 nights
                </span>
                <i className="fa fa-angle-right"></i> 4-star accommodation
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-1">
                    <i className="fa fa-star"></i>
                  </p>
                  <p className="text-yellow-500 mr-2">
                    <i className="fa fa-star"></i>
                  </p>
                  <span className="text-gray-600">1892 reviews</span>
                </div>
                <Button color="teal">Book Now</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Country;
