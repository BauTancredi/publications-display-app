import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navigation from '../components/Navigation'

import { PublicationModel, UserModel } from '../models'

const NewPublicationPage = () => {
  const [publication, setPublication] = useState<Omit<PublicationModel, 'id'>>({
    userId: 0,
    title: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const options = response.data.map((user: any) => ({
        value: user.id,
        label: user.name,
      }));
      setUsers(options);
    };

    fetchUsers();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        publication
      );
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
      <form onSubmit={handleSubmit} className="border rounded-lg p-3 my-3 w-96 mx-auto mt-5 flex-col">
        <div className='flex flex-col my-3'>
          <label htmlFor="userId">User:</label>
          <select
            id="userId"
            name="userId"
            value={publication.userId}
            onChange={handleChange}
            className="text-black"
          >
            <option value="0">Select a user</option>
            {users.map((user) => (
              <option key={user.value} value={user.value}>
                {user.label}
              </option>
            ))}
          </select>

        </div>
        <div className='flex flex-col my-3'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={publication.title}
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div className='flex flex-col my-3'>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={publication.body}
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <button type="submit" className='bg-yellow-500 py-2 rounded w-full disabled:bg-yellow-200 text-black' disabled={
          !publication.userId ||
          !publication.title ||
          !publication.body || isLoading}>
          {isLoading ? 'Loading...' : "Submit"}
        </button>
      </form >
    </>
  );
};

export default NewPublicationPage