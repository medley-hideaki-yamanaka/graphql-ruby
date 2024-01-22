import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
      app1: {
        executor: 'per-vu-iterations',
        exec: 'app1',
        vus: 1,
        iterations: 20,
        maxDuration: '10s',
      },
      app2: {
        executor: 'per-vu-iterations',
        exec: 'app2',
        vus: 1,
        iterations: 20,
        maxDuration: '10s',
      },
      app3: {
        executor: 'per-vu-iterations',
        exec: 'app3',
        vus: 1,
        iterations: 20,
        maxDuration: '10s',
      },
      app4: {
        executor: 'per-vu-iterations',
        exec: 'app4',
        vus: 1,
        iterations: 20,
        maxDuration: '10s',
      },
    },
};

export function app1 () {
    const url = `http://localhost:3000/graphql`;
    const payload = JSON.stringify({
        query: "query getAutors {\
            authors {\
                id\
                email\
                posts {\
                    id\
                    title\
                }\
                }\
            }",
        operationName: 'getAutors',
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}

export function app2 () {
    const url = `http://localhost:3001/graphql`;
    const payload = JSON.stringify({
        query: "query getAutors {\
            authors {\
                id\
                email\
                posts {\
                    id\
                    title\
                }\
                }\
            }",
        operationName: 'getAutors',
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}

export function app3 () {
    const url = `http://localhost:3002/graphql`;
    const payload = JSON.stringify({
        query: "query getAutors {\
            authors {\
                id\
                email\
                posts {\
                    id\
                    title\
                }\
                }\
            }",
        operationName: 'getAutors',
    });
    
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}

export function app4 () {
    const url = `http://localhost:3003/authors`;
    http.get(url);
}
