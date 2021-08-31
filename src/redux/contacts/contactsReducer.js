import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import contactsActions from "./contacrtsActions";

const initialState = [];

const checkContact = (contacts, name, number) => {
  const includedName = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  const includedNumber = contacts.find(
    (contact) =>
      contact.number.replace(/[^0-9]/g, "") === number.replace(/[^0-9]/g, "")
  );

  if (includedName) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `${name.toUpperCase()}\nis already in contacts!`,
      confirmButtonColor: "indianred",
    });

    return includedName;
  }

  if (includedNumber) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `This number is already in contacts as\n${includedNumber.name.toUpperCase()}`,
      confirmButtonColor: "indianred",
    });
    return includedNumber;
  }
};

const addContact = (state, { payload }) => {
  const includedContact = checkContact(state, payload.name, payload.number);

  if (includedContact) return state;

  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  const contacts = state.filter(({ id }) => {
    return id !== payload;
  });

  return contacts;
};

const items = createReducer(initialState, {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
