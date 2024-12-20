import React, { useState, useEffect,  } from "react";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, isError } = useQuery({ queryKey: ['books'], queryFn: fetchData })
return (
  <>
  if (isLoading) return <div>Loading...</div>;
   if (isError) return <div>error fetchPosts</div>;
  </>
)

function PostsComponent() {
  const [users, setUsers] = useState({ hits: [] });

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setUsers(result.data);
      return Response.json();
      cacheTime={staleTime};
      refetchOnWindowFocus.keepPreviousData();    };
  }, []);

  return (
    <div>
      <p>Posts Component </p>
      <ul>
        {users.hits.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
      <button onClick={Post}>Refetch your data</button>
    </div>
  );
}

export default PostsComponent;
