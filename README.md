<h1 align="center">
  Spotlight / React / Test
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/4c0dd944-ca87-4780-85f5-32cb6bc40c70/deploy-status)](https://app.netlify.com/sites/adtrak-spotlight-test/deploys)

Gatsby + DatoCMS powered spotlight template for Adtrak

- [Example](https://adtrak-spotlight-test.netlify.com/nottingham)
- [DatoCMS Dashboard](https://spotlight.admin.datocms.com)

## 🚀 Quick start

1.  **Clone the repo**

    ```sh
    git clone https://github.com/samuelgoddard/spotlight-react-dato
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and install the local dependencies.

    ```sh
        yarn install
    ```

    Create a `.env` file in the root of your project and add a DATO_API_KEY variable, your API key can be found in dato dashboard > settings > API tokens > Read-only API token

    ```
        DATO_API_KEY=XXXXXXXXXXXXX
    ```

    Start developing locally.

    ```sh
    cd spotlight-react-dato/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💫 Deployment

Deployment is done via Netlify on push to `master`, deploys can be triggered directly through the Dato Dashboard. This should be done after a mass edit to save API usage.

## 📄 Docs

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [DatoCMS](https://www.datocms.com/)
- [TailwindCSS](https://tailwindcss.com/)