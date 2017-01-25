import uri from "../src/index";

describe("uri template string", function() {
  it("outputs correct URIs", function() {
    expect(uri``).toBe("");
    expect(uri`/foo`).toBe("/foo");
    expect(uri`/foo/${123}`).toBe("/foo/123");
    expect(uri`/foo/${123}/bar`).toBe("/foo/123/bar");
    expect(uri`/foo/${"some-string"}`).toBe("/foo/some-string");
    expect(
      uri`/foo/${"some?string/with\\symbols"}`
    ).toBe("/foo/some%3Fstring%2Fwith%5Csymbols");
  });
});
