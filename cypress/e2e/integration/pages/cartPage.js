class CartPage {
    // Define locators as class properties
    btnAddToCartBag = '[id="add-to-cart-sauce-labs-backpack"]';
    btnAddToCartBikeLight = '[id="add-to-cart-sauce-labs-bike-light"]';
    btnAddToCartTShirt = '[id="add-to-cart-sauce-labs-bolt-t-shirt"]';
    btnAddToCartJacket = '[id="add-to-cart-sauce-labs-fleece-jacket"]';
    btnAddToCartOnesie = '[id="add-to-cart-sauce-labs-onesie"]';
    btnAddToCartRedTShirt = '[id="add-to-cart-test.allthethings()-t-shirt-(red)"]';

    btnCart = '[id="shopping_cart_container"]';

    btnRemoveToCartBag = '[id="remove-sauce-labs-backpack"]';
    btnRemoveToCartBikeLight = '[id="remove-sauce-labs-bike-light"]';
    btnRemoveToCartTShirt = '[id="remove-sauce-labs-bolt-t-shirt"]';
    btnRemoveToCartJacket = '[id="remove-sauce-labs-fleece-jacket"]';
    btnRemoveToCartOnesie = '[id="remove-sauce-labs-onesie"]';
    btnRemoveToCartRedTShirt = '[id="remove-test.allthethings()-t-shirt-(red)"]';

    icnItemCount = '[class="shopping_cart_badge"]';
    itemCart = '[class="cart_item"]';

    listCart = '[class="cart_list"]'
    lblPageTitle = '[class="title"]';

    // Methods to interact with elements on the page
    countCartItems = () => {
        cy.get(this.listCart)
          .find(this.itemCart)
          .its('length')
          .then((itemCount) => {
            cy.log(`Number of items in the cart: ${itemCount}`);
        });
      };
  }
  export default new CartPage();