export default class BundleError extends Error {
  constructor(message) {
    super(`Dang it, Bobby: ${message}`);
    this.name = "BundleError";
  }
}
