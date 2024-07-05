import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import styles from "./UserCard.module.css";

function UserCard({ user, onTerminate }) {
  return (
    <Card className={styles.card}>
      <div>
        <CardMedia
          component="img"
          className={styles.cardMedia}
          image={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
      </div>
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            <div style={{ display: "flex" }}>
              <span>Telephone:</span>
              <span style={{ marginBottom: "20px" }}> {user.phone}</span>
            </div>
          </Typography>
        </Box>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onTerminate(user.id)}
            className={styles.terminateButton}
          >
            Demission
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserCard;
