import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Home.jsx"));

const Home = props => (
	<Suspense fallback={null}>
		<LazyHome {...props} />
	</Suspense>
);

export default Home;
