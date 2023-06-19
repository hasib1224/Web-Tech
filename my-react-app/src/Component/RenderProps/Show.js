import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";
import Counter from "./Counter";

export default function show() {
  return (
    <>

    {/* commented code is also correct */}

      {/* <Counter
        render={(count, increment) => (
          <ClickCount count={count} increment={increment} />
        )}
      />

      <Counter
        render={(count, increment) => (
          <HoverCount count={count} increment={increment} />
        )}
      /> */}

      <Counter>
        {(count,increment)=>(<ClickCount count={count} increment={increment} />)}
      </Counter>

      <Counter>
        {(count,increment)=>(<HoverCount count={count} increment={increment} />)}
      </Counter>
    </>
  );
}
