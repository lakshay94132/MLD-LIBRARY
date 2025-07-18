import React from 'react';

export default function Home() {
  return (
    <main className="container my-4">
       <section className="row">

        
      <img src='/assets/Testing.jpg' class="rounded float-start" alt="Back Ground Image"
      style={{
          height: '300px',
          width: '300px',
          marginLeft: 'auto',
          marginBottom: 'auto',
          marginTop: '20px'
        }}
/>

      <img src="/assets/Testing.jpg" class="rounded float-end" alt="Back Ground Image"
      style={{
          height: '300px',
          width: '300px',
          marginLeft: 'auto',
          marginBottom: 'auto',
          marginTop: '20px'
        }}/>

      </section>
    </main>
  );
}
