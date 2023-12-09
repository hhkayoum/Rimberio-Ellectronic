import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyCartDetails from "./MyCartDetails";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment10-server-wine.vercel.app/userCarts/${user?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment10-server-wine.vercel.app/userCarts/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = cart.filter((aCart) => aCart._id !== id);
              setCart(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error!", "Deletion was unsuccessful.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            Swal.fire("Error!", "An error occurred while deleting.", "error");
          });
      }
    });
  };

  console.log(cart);
  return (
    <div className="lg:my-32 mt-20  max-w-2xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#F2F2F2]">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((aCart) => (
              <MyCartDetails
                key={aCart._id}
                aCart={aCart}
                handleDelete={handleDelete}
              ></MyCartDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
