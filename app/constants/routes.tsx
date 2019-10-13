interface RoutesType {
    [routeName: string]: {
        path: string;
        displayName: string;
        returnTo?: string;
    };
}

const routes: RoutesType = {
    HOME: { path: '/', displayName: 'Home' }
};

export default routes;
