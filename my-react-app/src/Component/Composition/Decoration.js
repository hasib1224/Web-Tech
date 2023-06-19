import Text from "./Text";
import Emoji from "./Emoji";
import Bracket from "./Bracket";

export default function Decoration() {
  return (
    <>
      <Emoji>
        {/* ()=> It's the this.props.children() method or anonymous mehod here,  and ei method e ami pass korbo addEmoji*/}

        {
          ({ addEmoji }) => (
            <Bracket>
              {({ addBracket }) => (
                <Text addEmoji={addEmoji} addBracket={addBracket} />
              )}
            </Bracket>
          )

          //  <Text addEmoji={addEmoji} />
        }
      </Emoji>
    </>
  );
}
