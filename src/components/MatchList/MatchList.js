/* - render all the favourites 
  - when click on robot goes to chat 
*/

const MatchList = ({ favourites }) => {
  return (
    <div>
      {favourites.map((item) => (
        <div key={item.id}>
          <img src={item.profile_image} alt={item.name} height="40" />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
