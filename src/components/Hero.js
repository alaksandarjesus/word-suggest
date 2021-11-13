import '../styles/Hero.css';
import Search from './Search';

function Hero(props) {
  return (
    <section className="hero is-link is-halfheight">
        <div className="hero-body">
            <div className="container">
                <p className="title">
                    Word Search
                </p>
                <Search toggleMore={props.toggleMore} setQuery={props.setQuery} />
            </div>
        </div>
    </section>
  );
}

export default Hero;
