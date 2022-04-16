import { useQuery, gql } from "@apollo/client";

const LAUNCH_LIST = gql`
	query GetLaunchesPast($limit: Int! = 10) {
		launchesPast(limit: $limit) {
			id
			mission_name
			links {
				flickr_images
				mission_patch_small
			}
			rocket {
				rocket_name
			}
			launch_date_utc
			details
		}
	}
`;

function LaunchList({ limit }) {
	const { loading, error, data } = useQuery(LAUNCH_LIST, {
		variables: { limit },
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.launchesPast.map(
		({
			id,
			mission_name,
			links: { flickr_images, mission_patch_small },
			launch_date_utc,
			details,
		}) => (
			<div key={id}>
				<p>
					{id}: {mission_name}: {launch_date_utc}
					{details}
				</p>
				<br />
				<img src={flickr_images} width={300} alt={mission_name} />
				<img src={mission_patch_small} width={300} alt={mission_name} />
			</div>
		)
	);
}

// function LaunchList() {
// 	return <h1>Test</h1>;
// }

export default LaunchList;
