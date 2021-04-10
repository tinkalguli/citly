import React from "react";
import LinkForm from "components/Links/Form/LinkForm";

const CreateLink = ({ setLink, handleSubmit, loading, link }) => {
  return (
    <LinkForm
      setLink={setLink}
      link={link}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateLink;
