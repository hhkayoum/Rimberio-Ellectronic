// import Swal from "sweetalert2";
// const AddProduct = () => {
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const image = form.image.value;
//     const name = form.name.value;
//     const brandName = form.brandName.value;
//     const category = form.category.value;
//     const price = form.price.value;
//     const rating = form.rating.value;
//     const shortDescription = form.shortDescription.value;
//     const newProducts = {
//       image,
//       name,
//       brandName,
//       category,
//       price,
//       rating,
//       shortDescription,
//     };
//     console.log(newProducts);

//     fetch("https://assignment10-server-wine.vercel.app/products", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newProducts),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             icon: "success",
//             title: "Success.",
//             text: "Product add success",
//             confirmButtonText: "cool",
//           });
//         }
//       });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md mt-28 mb-10">
//       <h2 className="text-xl font-bold mb-4">Add Product</h2>
//       <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4">
//         <div className="mb-4">
//           <label
//             htmlFor="image"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Image
//           </label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             className="w-full border p-2 rounded"
//             placeholder="Enter image URL"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full border p-2 rounded"
//             placeholder="Enter product name"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="brandName"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Brand Name
//           </label>
//           <input
//             type="text"
//             id="brandName"
//             name="brandName"
//             className="w-full border p-2 rounded"
//             placeholder="Enter brand name"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="category"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             className="w-full border p-2 rounded"
//           >
//             <option value="Technology and Electronics">
//               Technology and Electronics
//             </option>
//             <option value="Technology and Electronics">
//               Technology and Electronics
//             </option>
//             <option value="Technology and Electronics">
//               Technology and Electronics
//             </option>
//             {/* Add other categories as needed */}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="price"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Price
//           </label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             className="w-full border p-2 rounded"
//             placeholder="Enter product price"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="rating"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Rating
//           </label>
//           <input
//             type="text"
//             id="rating"
//             name="rating"
//             className="w-full border p-2 rounded"
//             placeholder="Enter product rating"
//           />
//         </div>
//         <div className="mb-4 col-span-2">
//           <label
//             htmlFor="shortDescription"
//             className="block text-sm font-semibold text-gray-600 mb-2"
//           >
//             Short Description
//           </label>
//           <textarea
//             id="shortDescription"
//             name="shortDescription"
//             className="w-full border p-2 rounded"
//             placeholder="Enter short description"
//           />
//         </div>
//         <div className="col-span-2">
//           <button
//             type="submit"
//             className="bg-[#F2101E] text-white p-2 rounded w-full hover:bg-[#e9666e] "
//           >
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

// import { useContext } from "react";
// import { ThemeContext } from "../../provider/ThemeProvider";

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddProduct = () => {
  const brands = useLoaderData();
  console.log(brands);
  console.log(brands);
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const brand = e.target.brand.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const shortDescription = e.target.shortDescription.value;

    const ProductDetails = {
      name,
      image,
      brand,
      category,
      price,
      rating,
      shortDescription,
      userEmail: user.email,
    };

    fetch("https://assignment10-server-wine.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ProductDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        e.target.reset();
      });
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-5 py-6 md:py-0 lg:py-16">
      <div className="flex flex-col justify-center items-center min-h-screen mx-3 md:mx-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 max-w-screen-lg bg-[#FDF9EE] md:p-24">
            <div className="w-full mt-12 md:mt-0 mb-16  text-center">
              <h1 className="text-4xl font-semibold mt-3">Add Product</h1>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Image Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="image"
                type="text"
                placeholder="Image Link"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Brand Name
              </label>
              <select
                name="brand"
                className="border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5 "
                required
              >
                <option value="">Choose a brand</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.brand}>
                    {brand.brand}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Category
              </label>
              <select
                name="category"
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
                required
              >
                <option value="">Choose a category</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Audio">Audio</option>
                <option value="Watch">Watch</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Rating
              </label>
              <select
                name="rating"
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
                required
              >
                <option value="">Choose Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="number"
                placeholder="Price"
              />
            </div>
            <div className="w-full px-4">
              <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Short Description
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="shortDescription"
                rows="4"
                placeholder="Short Description"
                required
              ></textarea>
            </div>
            <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
              <button
                className="bg-[#F2101E] hover:bg-[#f3515c] text-white font-light w-2/3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
