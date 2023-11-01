import React, { useEffect } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GetALLUsers, DeleteUsers } from "../Redux/Action/acton";
import { useNavigate } from "react-router-dom";

function HomePage({ User_DATA, GetALLUsers, DeleteUsers, Delete_DATA }) {
  const navigate = useNavigate();

  useEffect(() => {
    GetALLUsers();
  }, []);

  const handleToAdd = () => {
    navigate("/addpage");
  };

  const handleToDelete = (id) => {
    DeleteUsers(id);
  };

  const HandleToEdit = (id) => {
    navigate("/updatePage", { state: id });
  };
  return (
    <div className="Home">
      <div className="table_Head">
        <h1>Table</h1>
        <button onClick={handleToAdd}>Add Item</button>
      </div>

      <table>
        <tr>
          <th>Title</th>
          <th>price</th>
          <th>Action</th>
        </tr>
        {User_DATA.length === 0
          ? ""
          : User_DATA.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className="table_button">
                    <button
                      className="Edit"
                      onClick={() => HandleToEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="Delete"
                      onClick={() => handleToDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Number_Mobiles: state.allUserData.Number_Mobiles,
    User_DATA: state.allUserData.User_DATA,
    Delete_DATA: state.allUserData.Delete_DATA,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ GetALLUsers, DeleteUsers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
