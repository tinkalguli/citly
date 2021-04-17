import React, { useEffect, useState } from "react";
import linksApi from "apis/links";
import { logger } from "common/logger";
import PageLoader from "components/PageLoader";

const Redirect = ({ history, match }) => {
  const slug = match.params.slug;
  const [url, setUrl] = useState("");
  const [noMatch, setNoMatch] = useState(false);

  const handleRedirect = async slug => {
    try {
      const responds = await linksApi.show(slug);
      const originalUrl = responds.data.link.original_url;
      setUrl(originalUrl);
      if (!originalUrl) setNoMatch(true);
    } catch (error) {
      logger.error(error);
      setNoMatch(true);
    }
  };

  useEffect(() => {
    handleRedirect(slug);
  }, []);

  useEffect(() => {
    if (noMatch) {
      history.push("/no/match");
    } else if (url) {
      window.location.href = url;
    }
  }, [url]);

  return <PageLoader />;
};

export default Redirect;
