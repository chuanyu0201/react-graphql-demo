import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { QueryLaunchesDocument, QueryLaunchesQuery } from '../../graphql/generated';
import { ArrayElement } from '../Types';

type LaunchesCell = ArrayElement<QueryLaunchesQuery['launchesPast']> & { id: string };

const LaunchesPage = () => {
  const { data, loading } = useQuery(QueryLaunchesDocument, { variables: { limit: 10 } });

  return (
    <div className="m-12">
      <h1 className="text-3xl mb-12">Launches</h1>
      <Table dataSource={data?.launchesPast as LaunchesCell[]} loading={loading} rowKey="id">
        <Table.Column<LaunchesCell> title="ID" render={(_, record) => record.id} />
        <Table.Column<LaunchesCell>
          title="Mission Name"
          render={(_, record) => record?.mission_name}
        />
        <Table.Column<LaunchesCell>
          title="launch Site"
          render={(_, record) => record?.launch_site?.site_name_long}
        />
        <Table.Column<LaunchesCell>
          title="Rocket"
          render={(_, record) => record?.rocket?.rocket_name}
        />
        <Table.Column<LaunchesCell>
          title="Launch Date Local"
          render={(_, record) => record?.launch_date_local}
        />
      </Table>
    </div>
  );
};
export default LaunchesPage;
