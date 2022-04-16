import { useQuery, gql } from "@apollo/client";

const ROCKETS = gql`
	query GetRockets {
		rockets {
			id
			name
		}
	}
`;

function GetRockets() {
	const { loading, error, data } = useQuery(ROCKETS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.rockets.map(({ id, name }) => (
		<div key={id}>
			<p>
				{id}: {name}
			</p>
		</div>
	));
}

export default GetRockets;
