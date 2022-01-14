import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  ListItemText,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();

  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 3000,
      date: "Thu Jan 13 2022",
    },
    {
      id: 2,
      type: "Expense",
      category: "Transportation",
      amount: 40,
      date: "Tue Jan 11 2022",
    },
    {
      id: 3,
      type: "Expense",
      category: "Utilities",
      amount: 130,
      date: "Mon Jan 10 2022",
    },
  ];
  return (
    <MUIList dense="false" className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
