const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5"
];

function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.4) {
            reject(new Error(`Помилка для ${url.split('/').pop()}`));
            return;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => resolve({ url, title: data.title }))
            .catch(err => reject(err));
    });
}

async function fetchAllData(urlsList) {
    console.log(" Початок роботи...");

    const currentUrls = Array.from(urlsList);
    const results = await Promise.allSettled(currentUrls.map(u => fetchData(u)));

    const failed = [];

    results.forEach((item, index) => {
        if (item.status === "fulfilled") {
            const { title } = item.value;
            console.log(` OK: ${title.slice(0, 20)}...`);
        } else {
            failed.push({ url: currentUrls[index], reason: item.reason });
            console.warn(` Провал: ${item.reason.message}`);
        }
    });

    if (failed.length > 0) {
        console.log(` Retry через 1 сек для ${failed.length} запитів...`);
        await new Promise(res => setTimeout(res, 1000));

        const retryResults = await Promise.allSettled(Array.from(failed).map(f => fetchData(f.url)));

        retryResults.forEach((res, j) => {
            if (res.status === "fulfilled") {
                const { url } = res.value;
                console.log(` Повтор успішний : ${url}`);
            } else {
                console.error(` Провал: ${failed[j].url}`);
            }
        });
    } else {
        console.log(" Всі запити успішні!");
    }
}

fetchAllData(urls).catch(err => console.error(err));