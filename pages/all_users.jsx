import React from 'react';
import axios from 'axios';
import AllUsersContain from '../Components/Users/All Users';

const AllUsers = ({ data }) => {
  return <AllUsersContain data={data} />;
};

// This gets called on every request
export async function getServerSideProps() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NTIxMDYyYTIwY2NlZDEwNWNiN2YiLCJpYXQiOjE2NzEwOTk2ODcsImV4cCI6MTY3MTE4NjA4N30.Y0CGS1dPZGPOUQH9MvFnlZJyJ0FmdryXZ9lfvnhIWgU';
  // Fetch data from external API
  const res = await axios.get('http://localhost:3000/api/user/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res;

  // Pass data to the page via props
  return { props: data.data };
}

export default AllUsers;
