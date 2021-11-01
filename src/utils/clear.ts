import { cursorTo, clearScreenDown } from 'readline';

export default function (title?: string) {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    cursorTo(process.stdout, 0, 0);
    clearScreenDown(process.stdout);
    if (title) {
      console.log(title);
    }
  }
}
