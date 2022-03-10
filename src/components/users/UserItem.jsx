import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card side bj-base-100 shadow-md">
      <div className="flex-row item-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

{
  /* <img src={avatar_url} /> */
}
