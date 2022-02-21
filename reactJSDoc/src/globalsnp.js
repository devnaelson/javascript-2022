
//snippets
import Tick from './snippets/tick';
import Tick_2 from './snippets/tick';

/* take it to index loading */
import ComponentsPros from './snippets/ComponentsProp';

function funcComponentsPros() {
  return (
    <ComponentsPros />
  );
}

function GlobalSnippets() {
  return (
    <Tick />,
    <Tick_2 />
  );
}

export { GlobalSnippets, funcComponentsPros };
