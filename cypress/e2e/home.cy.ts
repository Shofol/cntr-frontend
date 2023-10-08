describe("home page spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").contains("Contour Health App");
  });
});
