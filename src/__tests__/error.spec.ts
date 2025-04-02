import BundleError from "../error";

describe("given we have a BundleError instance", () => {
  let bundleError: BundleError;
  beforeEach(() => {
    bundleError = new BundleError("Dang it, Bobby!");
  });
  describe("given we access name", () => {
    it("should return the name", () => {
      expect(bundleError.name).toEqual("BundleError");
    });
  });
  describe("given we access message", () => {
    it("should return the message", () => {
      expect(bundleError.message).toEqual("Dang it, Bobby!");
    });
  });
  describe("given we throw the error", () => {
    it("should return the error", () => {
      expect(() => {
        throw bundleError;
      }).toThrowError("Dang it, Bobby!");
    });
  });
});
