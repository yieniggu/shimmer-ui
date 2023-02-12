import React from "react";
import { ContactsList } from "../../components/contacts/ContactsList";
import { Layout } from "../../layout";

export const Contacts = () => {
  return (
    <>
      <Layout>
        <div className="bg-contacts">
          <ContactsList />
        </div>
      </Layout>
    </>
  );
};
