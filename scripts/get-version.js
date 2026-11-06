import { execFileSync } from 'node:child_process';

const dateParts = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).formatToParts(new Date());
const date = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));
const totalCommits = execFileSync('git', ['rev-list', '--count', 'HEAD'], { encoding: 'utf8' }).trim();

process.stdout.write(`${date.year}.${date.month}.${date.day}.${totalCommits}\n`);
