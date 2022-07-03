import { useQuery } from '@apollo/client';
import { Spin } from 'antd';
import { QueryLaunchNextDocument } from '../../graphql/generated';

const LaunchNext = () => {
  const { data, loading } = useQuery(QueryLaunchNextDocument);
  if (loading) return <Spin size="large" />;
  return (
    <div className="m-12">
      <h1 className="text-3xl mb-12">Launch Next</h1>
      <div className='border p-8'>
        <p>Id: {data?.launchNext?.id}</p>
        <p>Rocket Name: {data?.launchNext?.rocket?.rocket_name}</p>
        <p>Mission Name: {data?.launchNext?.mission_name}</p>
        <p>Launch Date Local: {data?.launchNext?.launch_date_local}</p>
      </div>
    </div>
  );
};
export default LaunchNext;
