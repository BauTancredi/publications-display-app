import { useEffect, useState } from 'react';
import axios from 'axios';

import Select from 'react-select';

import { Publication } from '../models/Publication'
import { User } from '../models/User'
import Navigation from '../components/Navigation';
import Spinner from '../components/Spinner';
import PublicationDetails from '../components/Publication';
import Pagination from '../components/Pagination';

const PublicationDisplayPage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<null | User>(null);

  const publicationsPerPage = 10;
  const pagesVisited = pageNumber * publicationsPerPage;

  useEffect(() => {
    const fetchPublications = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPublications(response.data);
    };

    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const options = response.data.map((user: any) => ({
        value: user.id,
        label: user.name,
      }));
      setUsers(options);
    };

    fetchPublications();
    fetchUsers();
  }, []);

  const filteredPublications = publications
    .filter((publication) => !selectedUser || publication.userId === selectedUser.value)

  const displayPublications =
    filteredPublications.slice(pagesVisited, pagesVisited + publicationsPerPage)
      .map((publication) => (
        <PublicationDetails key={publication.id} publication={publication} publishedBy={users.find((user: any) => user.value === publication.userId)?.label} />
      ));

  const publicationsCount = filteredPublications.length;
  const pageCount = Math.ceil(publicationsCount / publicationsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const handleUserChange = (option: any) => {
    setSelectedUser(option);
    setPageNumber(0);
  };

  if (!publications.length) {
    return (
      <>
        <Navigation />
        <Spinner />
      </>
    );
  }


  return (
    <div>
      <Navigation />
      <Select options={users} onChange={handleUserChange} isClearable={true}
        styles={{
          option: (provided) => ({
            ...provided,
            color: 'black',
          })
        }}
      />
      {displayPublications}
      <Pagination
        currentPage={pageNumber}
        onPageChange={handlePageChange}
        publicationsPerPage={publicationsPerPage}
        totalPublications={filteredPublications.length} />
    </div>
  )
};

export default PublicationDisplayPage;
