import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

function Card(props) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm" key={props.data.id}>
        <figure>
          <img src={props.data.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {`${props.data.firstName} ${props.data.maidenName} ${props.data.lastName}`}
            {props.data.gender == "male" ? (
              <FaMale size="25px" />
            ) : (
              <FaFemale size="25px" />
            )}
          </h2>
          <p>
            <p>{`${props.data.address.address}, ${props.data.address.city}, ${props.data.address.state}`}</p>
            <p>{props.data.email}</p>
            <p>{props.data.phone}</p>
            <p>Age: {props.data.age}</p>
          </p>

          <div className="card-actions justify-center">
            <button
              className="btn btn-error"
              onClick={() => {
                props.deleteHandler(props.data.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
