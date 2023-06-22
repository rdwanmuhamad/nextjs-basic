import Layout from "@/components/Layout";
import React from "react";

interface UserDetailProps {
  user: User;
}

interface User {
  id: number,
  name: string,
  email: string
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <>
      <Layout pageTitle="User Detail">
        <div>User detail</div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false
  };
}

interface GetStaticProps {
  params: {
    id: string
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
