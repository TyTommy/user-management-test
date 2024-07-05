import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Grid, Typography } from "@mui/material";

function UserList({ onTerminate }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        const usersWithExtraData = response.data.data.map((user) => ({
          ...user,
          phone: "123-456-7890",
          address: "123 Main St, Anytown, USA",
        }));
        setUsers(usersWithExtraData);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleTerminate = (id) => {
    const terminatedUser = users.find((user) => user.id === id);
    onTerminate(terminatedUser);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        List of users
      </Typography>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} onTerminate={handleTerminate} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserList;
