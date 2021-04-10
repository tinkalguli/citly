import React, { useState, useEffect } from "react";

import Container from "components/Container";
import ListLinks from "components/Links/ListLinks";
import PageLoader from "components/PageLoader";
import linksApi from "apis/links";
import { logger } from "common/logger";
import CreateTask from "components/Links/CreateLink";

const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await linksApi.create({ link: { original_url: link } });
      fetchLinks();
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const handlePinned = async id => {
    try {
      await linksApi.update(id);
      fetchLinks();
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await linksApi.list();
      setLinks(response.data.links);
      setLink("");
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
      <CreateTask handleSubmit={handleSubmit} setLink={setLink} link={link} />
      <ListLinks data={links} handlePinned={handlePinned} />
    </Container>
  );
};

export default Dashboard;
