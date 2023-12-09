const MyCartDetails = ({ aCart, handleDelete }) => {
  console.log(aCart);
  const { image, name, price, _id } = aCart;
  return (
    <>
      <tr className="my-32">
        <th>
          <img className="w-[200px]" src={image} alt="" />
        </th>
        <td>{name}</td>
        <td>$ {price}</td>
        <td>
          <button onClick={() => handleDelete(_id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyCartDetails;
