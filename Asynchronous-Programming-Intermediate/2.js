// 2.2 Promise.all

const apis = ['https://api.example1.com', 'https://api.example2.com', 'https://api.example3.com'];

function fetchAllAPIs() {
    const promises = apis.map(api => 
        fetch(api)
            .then(response => response.json())
            .catch(error => {
                console.error(`Failed to fetch ${api}: ${error}`);
                return null;
            })
    );

    return Promise.all(promises)
        .then(results => {
            console.log('All API results:', results);
            return results;
        })
        .catch(error => {
            console.error('Promise.all error:', error);
        });
}

fetchAllAPIs();