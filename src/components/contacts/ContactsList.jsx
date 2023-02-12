import React from "react";
import { useSelector } from "react-redux";
import { ContactItem } from "./ContactItem";
import { ContactSkeleton } from "./ContactSkeleton";
export const ContactsList = () => {
  const { contacts, loadingContacts } = useSelector((state) => state.contacts);

  return (
    <div className="flex flex-col p-10 font-mabry-me text-2xl">
      <h1 className="text-gray-600">Mis Contactos</h1>
      {loadingContacts ? (
        <div className="py-16">
          <ContactSkeleton />
        </div>
      ) : contacts.length > 0 ? (
        <div className={`${contacts.length < 2 && "py-20 mb-1.5"}`}>
          {contacts.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
        </div>
      ) : (
        <h1>Empty...</h1>
      )}
    </div>
  );
};
