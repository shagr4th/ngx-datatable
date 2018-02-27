export type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;

export function drag(event: MouseEvent, {move: move, up: up}: { move: MoveHandler, up?: UpHandler }) {

  let startX = event.pageX;
  let startY = event.pageY;
  let x = startX;
  let y = startY;
  let moved = false;

  function mouseMoveHandler(e: MouseEvent) {
    let dx = e.pageX - x;
    let dy = e.pageY - y;
    x = e.pageX;
    y = e.pageY;
    if (dx || dy) {
      moved = true;
    }

    move(e, dx, dy, x, y);

    e.preventDefault(); // to avoid text selection
  }

  function mouseUpHandler(e: MouseEvent) {
    x = e.pageX;
    y = e.pageY;

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    if (up) {
      up(e, x, y, moved);
    }
  }

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
}
