import React, { useState } from "react";
import LinkForm from "components/Links/Form/LinkForm";
import linksApi from "apis/links";
import { logger } from "common/logger";

const CreateLink = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await linksApi.create({ link: { original_url: link } });
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <LinkForm setLink={setLink} loading={loading} handleSubmit={handleSubmit} />
  );
};

export default CreateLink;
