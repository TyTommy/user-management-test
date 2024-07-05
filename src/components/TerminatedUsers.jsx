import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function TerminatedUsers({ users }) {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        List of dismissed
      </Typography>
      {users.length === 0 ? (
        <Typography variant="body1" align="center">
          There are no terminated users.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.first_name} {user.last_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default TerminatedUsers;
