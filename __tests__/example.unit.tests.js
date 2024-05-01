import ProductService from "../Components/ProductService";
import Logger from "../Components/Logger";
import "@testing-library/jest-dom";

//NOTE - we are only testing code in these unit tests. UI Tests should go in a UI testing framework such as Selenium.

// Mock Product Data
const products = [];
products.push({
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: ["https://cdn.dummyjson.com/product-images/1/1.jpg", "https://cdn.dummyjson.com/product-images/1/2.jpg"],
});

products.push({
  id: 2,
  title: "iPhone X",
  description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  price: 899,
  discountPercentage: 17.94,
  rating: 4.44,
  stock: 34,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  images: ["https://cdn.dummyjson.com/product-images/2/1.jpg", ,],
});

products.push({
  id: 3,
  title: "Samsung Universe 9",
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  brand: "Samsung",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
});

const productsResult = { products: products };

const product = {
  id: 3,
  title: "Samsung Universe 9",
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  brand: "Samsung",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
};

const productResult = { product: product };

describe("Should Get Products", () => {
  test("getProjects should return an array equal to 3", async () => {
    //Mock fetch so we aren't making a data request
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(productsResult),
      })
    );

    const result = await ProductService.getProducts();

    expect(result.length).toBe(3);
  });
});

describe("Should Get Product", () => {
  test("getProduct should return one product", async () => {
    //Mock fetch so we aren't making a data request

    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(productResult),
      })
    );

    const result = await ProductService.getProduct(1);
    expect(result).toBeDefined();
  });
});

describe("Should Filter Product", () => {
  test("filterProducts should return an array equal to 3", async () => {
    //Mock fetch so we aren't making a data request
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(productsResult),
      })
    );

    const result = await ProductService.filterProducts("filter");
    expect(result.length).toBe(3);
  });
});

describe("Should Format Currency", () => {
  test("currencyFormat should format currenct", async () => {
    const expected = "$10.50";
    const value = 10.5;
    const result = ProductService.currencyFormat(value);
    expect(result).toBe(expected);
  });
});

describe("Should Log", () => {
  test("getProjects should call logger if http status not equal to 200", async () => {
    const spy = jest.spyOn(Logger, "Error");

    //Mock a fetch error response
    global.fetch = jest.fn(() => Promise.reject(""));

    const result = await ProductService.getProducts();

    expect(spy).toHaveBeenCalled();
  });
});

describe("Should Log", () => {
  test("filterProducts should call logger if http status not equal to 200", async () => {
    const spy = jest.spyOn(Logger, "Error");

    //Mock a fetch error response
    global.fetch = jest.fn(() => Promise.reject(""));

    const result = await ProductService.filterProducts("filter");

    expect(spy).toHaveBeenCalled();
  });
});

describe("Should Log", () => {
  test("getProduct should call logger if http status not equal to 200", async () => {
    const spy = jest.spyOn(Logger, "Error");

    //Mock a fetch error response
    global.fetch = jest.fn(() => Promise.reject(""));

    const result = await ProductService.getProduct(1);

    expect(spy).toHaveBeenCalled();
  });
});
