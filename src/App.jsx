import React from 'react';
import logo from './assets/png/Logo (2).png';
import mainImg from './assets/png/Sub Container.png';
import Container from './assets/png/Container.png';
import Container1 from './assets/png/Container (1).png';
import Container2 from './assets/png/Container (2).png';
import Container3 from './assets/png/Container (3).png';
import Container4 from './assets/png/Container (4).png';
import icon from './assets/png/icon.png';
import icon2 from './assets/png/icon (1).png';
import icon1 from './assets/png/Vector.png';
import iconCOntainer from './assets/png/Icon Container.png';
import iconCOntainer1 from './assets/png/Icon Container (1).png';
import iconCOntainer2 from './assets/png/Icon Container (2).png';
import iconCOntainer3 from './assets/png/Icon Container (3).png';
import iconCOntainer4 from './assets/png/Icon Container (4).png';
import iconCOntainer5 from './assets/png/Icon Container (5).png';
import freeTrialImg from './assets/png/Background Images.png';
import fbLogo from './assets/png/button.png';
import instaLogo from './assets/png/button (1).png';
import twLogo from './assets/png/button (2).png';

function App() {
  return (
    <>
      <header className='relative h-[700px] w-full flex justify-between items-start p-6 bg-black sm:flex-col'>
        <div className='z-10 w-full flex justify-between'>
          <div className='w-40'>
            <img src={logo} alt='StreamVibe Logo' className='w-full h-auto' />
          </div>

          <nav>
            <ul className='flex space-x-8 text-white text-lg'>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Movies & Shows
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Support
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Subscriptions
                </a>
              </li>
            </ul>
          </nav>

          <div className='flex space-x-4'>
            <img src={icon} alt='Search Icon' className='w-6 h-6' />
            <img src={icon1} alt='User Icon' className='w-6 h-6' />
          </div>
        </div>

        <img
          className='absolute top-0 left-0 z-0 w-full h-full object-cover'
          src={mainImg}
          alt='Main Background'
        />
      </header>

      <section className='text-center py-16 bg-black text-white sm:flex-col'>
        <h1 className='text-5xl font-bold'>The Best Streaming Experience</h1>
        <p className='text-lg mt-4 max-w-2xl mx-auto'>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
        <button className='mt-6 inline-block bg-red-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-red-700'>
          Start Watching Now
        </button>
      </section>

      <section className='py-12 px-6 bg-black '>
        <h2 className='text-3xl font-bold mb-8'>
          Explore our wide variety of categories
        </h2>
        <p className='mb-8'>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
        <div className='grid grid-cols-5 gap-4 sm:grid-cols-1'>
          <div className='bg-gray-800 p-4'>
            <div>
              <img src={Container} alt='action' />
            </div>
            <div className='w-[235px] flex justify-between'>
              <h3>Action</h3>
              <img src={icon2} alt='arrow' />
            </div>
          </div>
          <div className='bg-gray-800 p-4'>
            <div>
              <img src={Container1} alt='Adventure' />
            </div>
            <div className='w-[235px] flex justify-between'>
              <h3>Adventure</h3>
              <img src={icon2} alt='arrow' />
            </div>
          </div>
          <div className='bg-gray-800 p-4'>
            <div>
              <img src={Container2} alt='Comedy' />
            </div>
            <div className='w-[235px] flex justify-between'>
              <h3>Comedy</h3>
              <img src={icon2} alt='arrow' />
            </div>
          </div>
          <div className='bg-gray-800 p-4'>
            <div>
              <img src={Container3} alt='Drama' />
            </div>
            <div className='w-[235px] flex justify-between'>
              <h3>Drama</h3>
              <img src={icon2} alt='arrow' />
            </div>
          </div>
          <div className='bg-gray-800 p-4'>
            <div>
              <img src={Container4} alt='Horror' />
            </div>
            <div className='w-[235px] flex justify-between'>
              <h3>Horror</h3>
              <img src={icon2} alt='arrow' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-black py-12 px-6'>
        <h2 className='text-3xl font-bold text-white mb-8'>
          We Provide you streaming experience across various devices
        </h2>
        <div className='grid grid-cols-3 gap-8 text-white '>
          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px] '>
            <div className='flex justify-between'>
              <img
                src={iconCOntainer}
                alt='Smartphone'
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>Smartphones</h3>
            </div>
            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px] '>
            <div className='flex justify-between'>
              <img
                src={iconCOntainer1}
                alt='Tablet'
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>Tablet</h3>
            </div>
            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px]'>
            <div className='flex justify-between'>
              {' '}
              <img
                src={iconCOntainer2}
                alt='Smart TV'
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>Smart TV</h3>
            </div>
            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px]'>
            <div className='flex justify-between'>
              {' '}
              <img
                src={iconCOntainer3}
                alt='Laptops'
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>Laptops</h3>
            </div>
            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px]'>
            <div className='flex justify-between'>
              {' '}
              <img
                src={iconCOntainer4}
                alt='Gaming Consoles'
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>Gaming Consoles</h3>
            </div>

            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>

          <div className='bg-gray-900 p-6 rounded-lg w-[400px] h-[300px]'>
            <div className='flex justify-between'>
              {' '}
              <img
                src={iconCOntainer5}
                alt='VR Headsets '
                className='w-[72px] h-[72px] mb-4'
              />
              <h3 className='text-2xl mb-2'>VR Headsets </h3>
            </div>
            <p className='text-[#999999]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </section>

      <section className='bg-black py-12 px-6'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-4xl font-bold text-white mb-8 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {[
              {
                question: 'What is StreamVibe?',
                answer:
                  'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
              },
              {
                question: 'How much does StreamVibe cost?',
                answer:
                  'StreamVibe offers multiple plans starting at $9.99 per month.',
              },
              {
                question: 'What content is available on StreamVibe?',
                answer:
                  'You can enjoy a wide variety of movies, shows, and exclusive content on StreamVibe.',
              },
              {
                question: 'How can I watch StreamVibe?',
                answer:
                  'You can watch StreamVibe on various devices including smart TVs, phones, and tablets.',
              },
              {
                question: 'How do I sign up for StreamVibe?',
                answer:
                  'Sign up by visiting the StreamVibe website and choosing a subscription plan.',
              },
              {
                question: 'What is the StreamVibe free trial?',
                answer:
                  'StreamVibe offers a free trial where you can enjoy the service before subscribing.',
              },
              {
                question: 'What are the StreamVibe payment methods?',
                answer:
                  'You can pay via credit card, PayPal, or other online payment methods.',
              },
            ].map((faq, index) => (
              <div key={index} className='border-b border-gray-700'>
                <button
                  type='button'
                  className='w-full text-left flex justify-between items-center text-xl font-semibold text-white py-4 focus:outline-none'
                  onClick={() =>
                    document
                      .getElementById(`faq${index}`)
                      .classList.toggle('hidden')
                  }
                >
                  <span>{faq.question}</span>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </button>
                <div id={`faq${index}`} className='hidden'>
                  <p className='text-gray-300 py-4 pl-6'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-6'>
            <button className='bg-red-600 text-white py-3 px-8 rounded hover:bg-red-700'>
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      <section className='bg-black py-12 px-6'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          Choose the plan that's right for you
        </h2>
        <div className='flex justify-center mb-6'>
          <button className='text-white py-2 px-4 bg-gray-700 rounded-l-lg'>
            Monthly
          </button>
          <button className='text-white py-2 px-4 bg-gray-800 rounded-r-lg'>
            Yearly
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {[
            {
              price: '$9.99',
              title: 'Basic Plan',
              features: [
                'Extensive library of movies and shows',
                'Recently released titles',
              ],
            },
            {
              price: '$12.99',
              title: 'Standard Plan',
              features: [
                'Wider selection of movies and shows',
                'New releases and exclusive content',
              ],
            },
            {
              price: '$14.99',
              title: 'Premium Plan',
              features: ['Access to newest releases', 'Offline viewing'],
            },
          ].map((plan, index) => (
            <div key={index} className='bg-gray-900 p-6 rounded-lg text-white'>
              <h3 className='text-2xl font-bold mb-4'>{plan.title}</h3>
              <p className='text-xl mb-4'>{plan.price}/month</p>
              <ul className='mb-6 space-y-2'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='text-gray-300'>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='bg-red-600 py-2 px-4 rounded hover:bg-red-700 w-full'>
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        className='relative bg-cover bg-center py-12 px-6 text-white'
        style={{ backgroundImage: `url(${freeTrialImg})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-60 z-0'></div>
        <div className='relative z-10 max-w-3xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-4'>
            Start your free trial today!
          </h2>
          <p className='text-lg mb-6'>
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
          <button className='bg-red-600 py-3 px-8 rounded hover:bg-red-700'>
            Start a Free Trial
          </button>
        </div>
      </section>

      <footer className='bg-black py-12 px-6 text-white'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8'>
          <div>
            <h3 className='font-bold mb-4'>Home</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Categories
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Devices
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Movies</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Genres
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Trending
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  New Releases
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Popular
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Shows</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Genres
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Trending
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  New Releases
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Popular
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Subscription</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Plans
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-gray-400'>
                <img src={fbLogo} alt='facebook' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <img src={instaLogo} alt='instagram' />
              </a>
              <a href='#' className='hover:text-gray-400'>
                <img src={twLogo} alt='twiter' />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2023 StreamVibe, All Rights Reserved</p>
            <ul className='flex space-x-6 mt-4 md:mt-0'>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-400'>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
