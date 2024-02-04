import Commands from '../../../support/commands';

class DashboardPage {
    // Define locators as class properties
    drpSort = '[class="product_sort_container"]';
    
    drpOptionValue1 = 'option[value = "az"]'
    drpOptionValue2 = 'option[value = "za"]'
    drpOptionValue3 = 'option[value = "lohi"]'
    drpOptionValue4 = 'option[value = "hilo"]'

    itemInventory = '[class="inventory_item"]'; 

    listInventory = '[class="inventory_list"]';


    // Methods to interact with elements on the page
    countInventoryItems = () => {
        cy.get(this.listInventory)
        .find(this.itemInventory)
        .its('length') 
        .then((itemCount) => {
          expect(itemCount).to.eq(6);
        });
    };

    verifyFirstAndLastItemValues = () => {
        cy.get(this.listInventory)
          .find(this.itemInventory)
          .then(($items) => {
            const prices = $items.toArray().map(($item) => {
              return parseFloat(Cypress.$($item).find('.inventory_item_price').text().replace('$', ''));
            });
      
            const sortedPrices = [...prices].sort((a, b) => a - b);
      
            const firstItemPrice = sortedPrices[0];
            const lastItemPrice = sortedPrices[sortedPrices.length - 1];
      
            expect(prices).to.deep.equal(sortedPrices);
            expect(firstItemPrice).to.be.lessThan(lastItemPrice);
            expect(lastItemPrice).to.be.greaterThan(firstItemPrice);

            cy.log(`First item price: $${firstItemPrice}, Last item price: $${lastItemPrice}`);
          });
      };
  }

  export default new DashboardPage();

  