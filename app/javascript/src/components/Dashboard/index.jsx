import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import PageLoader from "components/PageLoader";
import linksApi from "apis/links";
import { logger } from "common/logger";
import CreateTask from "components/Links/CreateLink";

const Dashboard = ({ history }) => {
  const [links, setlinks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setlinks(response.data.links);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <CreateTask history={history} />
      {either(isNil, isEmpty)(links) ? (
        <h1 className="text-xl leading-5 text-center">
          You have no links assigned 😔
        </h1>
      ) : (
        <ListLinks data={links} />
      )}
    </Container>
  );
};

export default Dashboard;
