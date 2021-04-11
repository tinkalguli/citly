import React, { useEffect, useState } from "react";
import linksApi from "apis/links";
import { logger } from "common/logger";
import PageLoader from "components/PageLoader";

const Redirect = ({ history, match }) => {
  const slug = match.params.slug;
  const [url, setUrl] = useState("");

  const handleRedirect = async slug => {
    try {
      const responds = await linksApi.show(slug);
      setUrl(responds.data.link.original_url || "no-match");
    } catch (error) {
      logger.error(error);
      setUrl("no-match");
    }
  };

  useEffect(() => {
    handleRedirect(slug);
  }, []);

  useEffect(() => {
    if (url === "no-match") {
      history.push("/no/match");
    } else if (url) {
      window.location.href = url;
    }
  }, [url]);

  return <PageLoader />;
};

export default Redirect;
