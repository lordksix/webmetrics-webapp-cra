import HomeBody from 'componets/HomeSPA/HomeBody';

const Home = () => {
  const home = <h2>Welcome to lordksix&#39;s Air Quality App</h2>;

  return (
    <main className="appBody">
      {home}
      <HomeBody />
    </main>
  );
};

export default Home;
