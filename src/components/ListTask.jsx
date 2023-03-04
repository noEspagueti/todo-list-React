
import { Li } from "./Li";


export const ListTask = ({ state }) => {
  return (
    <div className="py-4 mt-8 grid place-content-center">
      <ul>
        {state.map((item) => {
          return !!item.task && <Li key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

