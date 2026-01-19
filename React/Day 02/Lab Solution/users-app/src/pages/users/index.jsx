import { useState } from "react";
import Card from "../../components/Card";
import { users as UsersDB } from "../../utils/users";

function Users() {
  const [users, setUsers] = useState(UsersDB);

  const deleteUser = (id) => {
    const remainingUsers = users.filter((user) => user.id != id);
    setUsers(remainingUsers);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 m-8">
        {users.map((user) => {
          return <Card data={user} deleteHandler={deleteUser} />;
        })}
      </div>
    </>
  );
}

export default Users;
