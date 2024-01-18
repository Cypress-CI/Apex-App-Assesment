// cypress/integration/automated_tests_spec.js

describe('Automated Tests', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://apex.oracle.com/pls/apex/r/mutiu_test_automation/qa-application/login');
    });
  
    it('should change the quantity of order 10 to 20 and verify updates', () => {
     
      cy.fixture('credentials.json').then((credentials) => {
        cy.get('#P9999_USERNAME').type(credentials.username);
        cy.get('#P9999_PASSWORD').type(credentials.password);
        cy.get('#B63753646042009460268').click();
  
        cy.scrollTo('bottom');
  
        cy.get('[data-page="1"] > .a-GV-pageButton').click();
  
        cy.get('[data-id="10"] > .u-tE').dblclick();
  
        cy.get('[data-id="10"] > .u-tE').type(`20`);

        let expectedValue = 20;

            cy.get('[data-id="10"] > .u-tE').then((value)=>{

                let actualValue = value.text()

                assert.equal(actualValue,expectedValue)
            })

            let expectedChartValue = 20

            cy.get('#R63921622180687899337 > .t-Region-bodyWrap > .t-Region-body').then((ChartValue)=>{

                let actualChartValue = ChartValue.text()

                assert.equal(actualChartValue,expectedChartValue)
  
    
      });
    });
  
    it('should change the location of order 10 to Deli and verify updates', () => {
     
      cy.fixture('credentials.json').then((credentials) => {
        cy.get('#P9999_USERNAME').type(credentials.username);
        cy.get('#P9999_PASSWORD').type(credentials.password);
        cy.get('#B63753646042009460268').click();
  
        cy.get('[data-page="1"] > .a-GV-pageButton').click();
  
        cy.get('[data-id="10"] > :nth-child(6)').dblclick();
  
        cy.get('.a-Icon.icon-popup-lov').click();
  
        cy.get('.a-PopupLOV-search').type(`deli`);
  
        cy.get('.a-PopupLOV-searchBar > .a-Button').click();
  
        cy.get('[data-id="1"]').click();
  
        cy.scrollTo('bottom');
  
        const expectedLocation = "Deli";
  
        cy.contains('Deli').then((customer) => {
          const actualLocation = customer.text();
          expect(actualLocation).to.equal(expectedLocation);
        });
  
        let expectedChatValue = 20;
  
        cy.get("path[d='M62,161H72V171H62Z']").then((chatValue) => {
          let actualChatValue = chatValue.text();
          assert.equal(actualChatValue, expectedChatValue);
        });
      });
    });
  });
});