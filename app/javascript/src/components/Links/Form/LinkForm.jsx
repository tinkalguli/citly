import React from "react";

import Input from "components/Input";
import Button from "components/Button";

const LinkForm = ({ link, setLink, loading, handleSubmit }) => {
  return (
    <form className="flex w-4/5" onSubmit={handleSubmit}>
      <div className="w-10/12">
        <Input
          placeholder="Enter a Url to shorten..."
          value={link}
          onChange={e => setLink(e.target.value)}
        />
      </div>
      <div className="w-2/12 flex justify-end">
        <Button type="submit" buttonText="Shorten!" loading={loading} />
      </div>
    </form>
  );
};

export default LinkForm;
