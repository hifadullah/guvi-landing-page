import './App.css';
import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Section from './Components/SectionOne/section';
import Showcase from './Components/ShowCase/showCase';
import Profile from './Components/Profile/profile';
import SignUp from './Components/SignUp/signup';
import Footer from './Components/Footer/footer';

function App() {

  const profileData = [
    {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
      name: "Margaret E.",
      review: "\"This is fantastic! Thanks so much guys!\""
    }, {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
      name: "Fred S.",
      review: "\"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.\""
    }, {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
      name: "Sarah W.",
      review: "\"Thanks so much for making these free resources available to us!\""
    } 
  ];

  const showcaseData = [
    {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
      title: "Fully Responsive Design",
      text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      imageOrder: "order-lg-2",
      textOrder: "order-lg-1"
    },
    {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
      title: "Updated For Bootstrap 5",
      text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      imageOrder: "order-lg-1",
      textOrder: "order-lg-2"
    },
    {
      imageUrl: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
      title: "Easy to Use & Customize",
      text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      imageOrder: "order-lg-2",
      textOrder: "order-lg-1"
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Showcase showcaseData = {showcaseData} />
      <Profile profileData = {profileData}/>
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;