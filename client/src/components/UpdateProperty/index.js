import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { QUERY_PROPERTIES } from "../../utils/queries";
import UpdatePropertyForm from "../UpdatePropertyForm";
import { UPDATE_PROPERTY, TOGGLE_UPDATE_FORM } from "../../utils/actions";

function UpdateProperty() {
  // const propId = id
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const allProperties = state.properties;
  // console.log("all properties from state:", allProperties)

  function toggleForm(id) {
    const currentProperty = state.properties.find(({ _id }) => _id === id);

    dispatch({
      type: UPDATE_PROPERTY,
      currentProperty,
    });
    console.log("current property", currentProperty);

    console.log("updated form state", state.updatePropertyForm);
    dispatch({ type: TOGGLE_UPDATE_FORM });
    // propId = id
    console.log("updated form state after click", state.updatePropertyForm);
    console.log("id", id);
  }

  useEffect(() => {
    if (allProperties) {
      dispatch({
        type: QUERY_PROPERTIES,
        allProperties,
      });
    }
    return () => {
      dispatch({
        type: QUERY_PROPERTIES,
        allProperties: {},
      });
    };
  }, [allProperties, dispatch]);

  return (
    <div>
      <div>
        <div className="table">
          <p>&nbsp;</p>
          {/* Property details and amenities */}
          <table className="ui striped  collapsing table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allProperties.map((property, index) => (
                <tr>
                  <td>
                    <button
                      data={property._id}
                      onClick={() => toggleForm(property._id)}
                      className="btn"
                      id={property.propertyName
                        .toLowerCase()
                        .replace(/\s/g, "")}
                    >
                      Select
                    </button>
                  </td>
                  <td>{property.propertyName}</td>
                  <td>{property.streetAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <UpdatePropertyForm />
          <div>
            <br />
<<<<<<< HEAD
            <button className="btn" id="update-user">
              Update Property
            </button>
            <button className="btn" id="delete-user">
              Delete Property
            </button>
            <Link to="/AdminDash" className="btn">
              Back to Dashboard
            </Link>
=======
            <button className="btnNav" id="update-user">Update Property</button>
            <button className="btnNav" id="delete-user">Delete Property</button>
            <Link to="/AdminDash" className="btnNav">Back to Dashboard</Link>
>>>>>>> 600120e7cf2c755d85ec89f0ae16de6b16f9d16d
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProperty;
