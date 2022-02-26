# Is The Order a Rabbit API
This REST API is based on [Is the Order a Rabbit](https://en.wikipedia.org/wiki/Is_the_Order_a_Rabbit%3F)'s [Rabbit House](https://gochiusa.fandom.com/wiki/Rabbit_House) menu according to [สาระน้องต่ายหมวด แรบบิทเฮาส์ ตอนที่ 1](https://www.facebook.com/gochiusa.thailand/photos/a.903554953406269/952039125224518/?type=3&theater) from [รับน้องต่ายซักแก้มั้ยคะ?](https://www.facebook.com/gochiusa.thailand/)

![Rabbit House Order](https://user-images.githubusercontent.com/35027979/155830606-10abb8ef-00d1-409b-8ee4-cf93351515e3.jpg)

### To use
Visit or create a get request to: [https://is-the-order-a-rabbit-api.onrender.com](https://is-the-order-a-rabbit-api.onrender.com)

### Route
Available route is consisted of:
- /
    - Return all availble menu
- /:type
    - Return available menu by type
- /:type/:menu
    - Return requested menu by name in specific type
- /:type/:menu/name
    - Return name with localization
- /:type/:menu/name/:locale
    - Return name by locale
- /:type/:menu/price
    - Return price with localization
- /:type/:menu/price/:price
    - Return price by locale

## Contribution
We welcome all contributions by sending PR to this repository.

### To start a contribution

## Prerequisite
- [Node.js](https://nodejs.org/en)
    - As written in JavaScript using Node.js as a runtime, we required you to install

1. Fork the repo.

2. Simply clone the repo and
```bash
git clone https://github.com/<Your Username>/is-the-order-a-rabbit-api
```

3. Navigate to project
```bash
cd is-the-order-a-rabbit-api
```

4. Install dependencies:
- If you use npm, run:
    ```bash
    npm install
    ```

- If you use yarn, run:
    ```bash
    yarn
    ```

- If you use pnpm, run:
    ```bash
    pnpm install
    ```

5. Make some change
    - If you were going to only added a menu, edit `order.json` on the root of the project.
    - If you had made some changed in code, please also run `test` before create a Pull Request.

6. Run test:
    - If you use npm, run:
    ```bash
    npm run test
    ```

    - If you use yarn, run:
    ```bash
    yarn test
    ```

    - If you use yarn, run:
    ```bash
    pnpm test
    ```

7. Commit to your repo:
```bash
git add .
git commit -m "<Commit Message>"
git push
```

8. Create a Pull Request

## Need Help ?
If you need help with anything, here're following methods:

#### Create an Issue

If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/SaltyAom/is-the-order-a-rabbit-api/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.
