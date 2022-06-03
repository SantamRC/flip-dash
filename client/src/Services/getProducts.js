// function getProducts() {
//   return new Promise((resolve, reject) => {
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch("http://localhost:6000/Products", requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         console.log(result);
//         resolve(result);
//       })
//       .catch((error) => {
//         console.log("error", error);
//         reject(error);
//       });
//   });
// }

// export default getProducts();
