# Philosophy Bank

Application that allows users to crowdsource, rank, and search online philosophy content.
Last added: Infinite scrolling and resource preview that includes resource image or video, title, description, and name of online source.

This is a more tidy version of the original repository found here: https://github.com/alfonsotech/philosophybank


## Getting Started

#### Please Note: You wont be able to run this code locally, but can find a deployed version of the app on Heroku: https://philosophybank.herokuapp.com/ Right now, it loads very slowly so please be patient.

1. Fork the phil-bank repo.
2. Clone your forked repo.
3. Change directories into the project folder ```cd philosophy-bank```
4. Run server.js file ```nodemon server.js``` or ```npm start```
5. Open a new tab in your terminal and change directories into the ```client``` folder, build the public files, then run the React, client side server: ```cd client && yarn build && yarn start```




## Built With

* [express](https://www.npmjs.com/package/express)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [react-fontawesome](https://www.npmjs.com/package/react-fontawesome)
* [link-preview](https://www.npmjs.com/package/link-preview)
* [axios](https://www.npmjs.com/package/axios)
* [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)

## Author

[Rita Alfonso](https://github.com/alfonsotech)


## References

[infinite scroll tutorial](https://github.com/react-u/18-infinite-scrolling-using-react/blob/03-implment-infinite-scroll/src/features/contact-list/contact.js)
