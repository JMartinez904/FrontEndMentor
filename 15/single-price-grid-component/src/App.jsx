import React from 'react'

export const App = () => {
  return (
    <main
      className='container is-flex-direction-column-is-mobile is-justify-content-center is-align-items-center is-family-primary  w-full is-mobile border-radious'
    >
      <section
        className='px-5 py-5 is-flex is-flex-direction-column has-background-white '
      >
        <h1
          className='has-text-primary is-size-5 has-text-weight-bold'
        >Join our community</h1>
        <blockquote>
          <p
            className='has-text-warning pt-4 has-text-weight-bold is-size-custom'
          >
            30-day, hassle-free money back guarantee
          </p>
          <p
             className='has-text-info pt-3 is-size-7 line-height' 
            >
            Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
          </p>
        </blockquote>
      </section>
      <section
        className='px-5 py-5 is-flex is-flex-direction-column has-background-primary w-full section section-2 '
      >
        <h1
          className='has-text-light is-size-5 has-text-weight-bold'
        >Monthly Subscription</h1>
        <blockquote>
          <p
            className='has-text-white is-size-3 mt-4 has-text-weight-bold relative'
          >
            $29 <span className='is-size-6 pl-4 has-text-light has-text-weight-normal center-absolute opacity'>per month</span>
          </p>
          <p
             className='has-text-light is-size-custom line-height' 
            >
            Full access for less than $1 a day
          </p>
        </blockquote>
        <a 
          className='w-full has-text-centered has-background-warning has-text-light py-3 mt-5 has-text-weight-bold box'
          href="#">
          Sign Up
        </a>
      </section>
      <section
        className='w-full has-background-success px-5 py-5 section section-2 ' 
      >
        <h1
          className='has-text-white is-size-5 has-text-weight-bold mb-4'
        >Why Us</h1>
        <li
          className='list is-size-8 has-text-light has-text-weight-normal'
        >
          <ul>Tutorials by industry experts</ul>
          <ul>Peer & expert code review</ul>
          <ul>Coding exercises</ul>
          <ul>Access to our GitHub repos</ul>
          <ul>Community forum</ul>
          <ul>Flashcard decks</ul>
          <ul>New videos every week</ul>
        </li>
      </section>
    </main>
  )
}
