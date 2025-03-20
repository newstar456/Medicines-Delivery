  'use client'
  import React from 'react'
  import { createClient } from '@/utils/supabase/server';
  import axios from "axios"

  // export default async function Shops() {
  //   const supabase = await createClient();
  //   const { data: shops } = await supabase.from("Shops").select();
  //   console.log(shops);

  //   return <pre>{JSON.stringify(shops, null, 2)}</pre>
  // }

  const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/shops")
      .then((response) => {
        console.log(response.data);

      });
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

fetchData();



const page = () => {
  return (
    <div>page</div>
  )
}

export default page