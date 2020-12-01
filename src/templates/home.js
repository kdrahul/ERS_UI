import Card from "../components/card";
const Home = () => {
  return (
    <div className="grid grid-col-3 grid-flow-col gap-4">
      <section className="col-auto">
        <h3 className="bg-yellow-300">Left Sidebar Content</h3>
      </section>
      <section className="col-auto">
        <Card
          title="Palace Grounds"
          description="This event is held in palace grounds for no good reason. This is nothing in here yet it feels like something is always here. But to be frank its better to leave it full than empty"
        />
      </section>
      <section className="col-auto bg-green-300">Right Sidebar Content</section>
    </div>
  );
};

export default Home;
