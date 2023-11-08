describe("sign in page spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth/signin");
  });

  it("signin successfully", () => {
    cy.get("#email").type("jahananowe@gmail.com");
    cy.get("#password").type("1234567890");
    cy.getByData("submit").click();
    cy.location("pathname").should("eq", "/dashboard/scheduling");
  });

  it("doesn't allow empty input", () => {
    cy.getByData("submit").click();
    cy.location("pathname").should("eq", "/auth/signin");
  });

  it("shows error on invalid password", () => {
    cy.get("#email").type("jahananower@gmail.com");
    cy.get("#password").type("123456780");
    cy.getByData("submit").click();
    cy.getByData("error-alert").should("exist");
  });

  it("shows doesn't allow invalid email", () => {
    cy.get("#email").type("jahananower");
    cy.get("#password").type("1234567890");
    cy.getByData("submit").click();
    cy.location("pathname").should("eq", "/auth/signin");
  });
});
