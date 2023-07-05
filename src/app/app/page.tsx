'use client';

import Form from "@/app/components/Form";
import Table from "@/app/components/Table";
import GoogleMaps from "@/app/components/GoogleMaps";

export default async function Page() {
    const res = await fetch('http://localhost:3000/api', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    const heroes = data.heroes;

    return (
        <main className="">

            <h1>Welcome</h1>
            <h2>Please add your hero to the database</h2>

            <Form/>

            <Table/>

            {/*<GoogleMaps/>*/}

        </main>
    )
}
