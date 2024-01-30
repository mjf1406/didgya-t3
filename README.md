# DidgYa

Did you do it? Did you experience it? DidgYa is an app designed to simplify the
way you track various things that happen in your life, from daily tasks, like
brushing your teeth or drinking water, to things you experience, like a headache
or an epiphany.

## Change Log

-   2024/1/xx
    -   created the logo.svg
    -   created the favicon.ico
    -   created the landing page
    -   picked brand colors -- started this, but am I happy with them?
    -   profile page
-   2024/1/xx
    -   start button now inserts a record into the DB
    -   times per day is updated based on the DB count
    -   start button now starts a DidgYa if `timed = true`, hides the start
        button, and reveals the stop button
    -   start button now pops the start dialog if the DidgYa has inputs
    -   clicking on a DidgYa now launches the view
    -   view now has edit and delete buttons
    -   view now has a [scatter plot](https://mui.com/x/react-charts/scatter/)
        of the data
-   2024/1/30
    -   loading spinner is now shown before DidgYas are fully loaded
    -   only DidgYas for the logged in user are fetched
    -   Create DidgYa now launches a dialog with the below inputs
        -   [x] name
        -   [x] quantity
        -   [x] unit
        -   [x] daily goal
        -   [x] emoji
        -   [x] timed
        -   inputs
-   2024/1/29
    -   added Create DidgYa item to top of DidgYa list -- does not function yet
    -   added `arrayExtensions.ts` as my personal module that extends
        Array.prototype
    -   added `stringExtensions.ts` as my personal module that extends
        String.prototype
    -   added `helperFunctions.ts` as another personal module that provides
        several utility functions
    -   added inputs for Poop into DB
    -   added selects for Poop into DB

## The Stack

-   [Next.js](https://nextjs.org)
-   [Prisma](https://prisma.io)
-   [Tailwind CSS](https://tailwindcss.com)
-   [tRPC](https://trpc.io)
-   [PlanetScale](https://planetscale.com/)
-   [Vercel](https://vercel.com/)
-   [Clerk](https://clerk.com/)
-   [Axiom](https://axiom.co/)
