function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId || userId <= 0) {
                reject(new Error(`Невірний ID користувача: ${userId} ❌`));
                return;
            }
            resolve({ id: userId, name: "Nastia_Dev", email: "nastia@soner.com" });
        }, 2000);
    });
}

function fetchOrders(userId) {
    return fetchUser(userId).then(user => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const errorChance = Math.random() < 0.2;
                if (errorChance) {
                    reject(new Error(`Не вдалося завантажити замовлення для ${user.name} 💔`));
                    return;
                }
                resolve([
                    { orderId: 1, item: "Mechanical Keyboard ⌨️" },
                    { orderId: 2, item: "Mouse pad 🖱️" }
                ]);
            }, 3000);
        });
    });
}

async function getUserWithOrders(userId) {
    try {
        console.log(" Крок 1: Отримуємо дані користувача...");
        const user = await fetchUser(userId);
        console.log(" Користувач знайдений:", user);

        console.log(" Крок 2: Отримуємо замовлення...");
        const orders = await fetchOrders(userId);

        console.log(" Результат отримано!");
        console.log(" Клієнт:", user.name);
        console.log(" Замовлення:", orders);

    } catch (error) {
        console.error(" Сталася помилка при виконанні й обробці:", error.message);
    }
}

getUserWithOrders(7).catch(err => console.error("Fatal:", err));