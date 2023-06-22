import Layout from "@/components/Layout";
import React from "react";

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  console.log(dataUsers);

  return (
    <Layout pageTitle="User Page">
      <div>User page</div>
      {dataUsers.map((user) => (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
