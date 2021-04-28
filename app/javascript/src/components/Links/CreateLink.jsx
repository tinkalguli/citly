import React, { useState } from "react";
import LinkForm from "components/Links/Form/LinkForm";
import { logger } from "common/logger";
import Button from "components/Button";

const CreateLink = ({ setLink, handleSubmit, loading, link }) => {
  const [reportLoading, setReportLoading] = useState(false);

  const handleReport = async () => {
    setReportLoading(true);
    try {
      window.open(window.location.href + "/report");
      setReportLoading(false);
    } catch (error) {
      logger.error(error);
      setReportLoading(false);
    }
  };

  return (
    <div className="flex justify-between mx-auto mt-10 max-w-2xl">
      <LinkForm
        setLink={setLink}
        link={link}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Button
        type="button"
        buttonText="📥 Reports"
        loading={reportLoading}
        onClick={handleReport}
      />
    </div>
  );
};

export default CreateLink;
