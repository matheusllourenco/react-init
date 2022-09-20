import Card from "../../Card";

function ContentRowMovies() {
  const cards = [
    {
      title: "Movies in Data Base",
      total: 21,
      borderColor: "primary",
      icon: "film",
    },
    {
      title: "Total awards",
      total: 79,
      borderColor: "success",
      icon: "award",
    },
    {
      title: "Actors quantity",
      total: 49,
      borderColor: "warning",
      icon: "user",
    },
  ];

  return (
    <div className="row">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
        // <Card
        //   key={card.title}
        //   title={card.title}
        //   borderColor={card.borderColor}
        //   total={card.total}
        //   icon={card.icon}
        // />
      ))}
    </div>
  );
}

export default ContentRowMovies;
