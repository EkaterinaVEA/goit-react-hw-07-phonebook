import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const contactsActions = {
  addContact: createAction("contacts/add", (name, number) => ({
    payload: {
      id: shortid(),
      name,
      number,
    },
  })),
  deleteContact: createAction("contacts/delete"),
  changeFilter: createAction("contacts/changeFilter"),
};

export default contactsActions;
