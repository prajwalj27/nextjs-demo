import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Profile = () => {
  const { data, error } = useSWR('/api/profile-data', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Profile | NextJS Demo</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h2>Welcome {data.name}!</h2>
    </div>
  );
};

export default Profile;