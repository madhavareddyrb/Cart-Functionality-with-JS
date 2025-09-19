## Ecommerce Cart Functionality:

Steps:

1.Load Dom content and create all the functionality inside dom

2.Create Products using Object with id,name,price

3.Intialize an empty cart array

4.Grab all the required ids using getElementById  and store in variables

5.To display products in DOM, iterate over the products array and create elements for each product using foreach loop

6.add a div for every product using create element ("div) to product div

7.add classList product too productdiv

create innerHTML span to display name,price with toFixed(2) and a button add to cart with data-id has product.id

8.Attach to productList to display all using appendChild(productDiv)

9.add a click event on productlist.But here if we click on any product it will add to add so we use target event ob BUTTON to add to cart


