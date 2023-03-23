import React, { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "../components/Navigation";
import { PublicationModel, UserModel } from "../models";

const NewPublicationPage = () => {
  const [publication, setPublication] = useState<Omit<PublicationModel, "id">>({
    userId: 0,
    title: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const options = response.data.map((user: any) => ({
        value: user.id,
        label: user.name,
      }));

      setUsers(options);
    };

    fetchUsers();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setPublication((prevPublication) => ({
      ...prevPublication,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", publication);

      alert(JSON.stringify(response.data));
      setPublication({
        userId: 0,
        title: "",
        body: "",
      });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Navigation />
      <form
        className="my-3 mx-auto mt-5 w-96 flex-col rounded-lg border p-3"
        onSubmit={handleSubmit}
      >
        <div className="my-3 flex flex-col">
          <label htmlFor="userId">User:</label>
          <select
            className="text-black"
            id="userId"
            name="userId"
            value={publication.userId}
            onChange={handleChange}
          >
            <option value="0">Select a user</option>
            {users.map((user) => (
              <option key={user.value} value={user.value}>
                {user.label}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            className="text-black"
            id="title"
            name="title"
            type="text"
            value={publication.title}
            onChange={handleChange}
          />
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="body">Body:</label>
          <textarea
            className="text-black"
            id="body"
            name="body"
            value={publication.body}
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full rounded bg-yellow-500 py-2 text-black disabled:bg-yellow-200"
          disabled={!publication.userId || !publication.title || !publication.body || isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default NewPublicationPage;
