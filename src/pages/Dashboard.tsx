export default function Dashboard() {
  return <div>Hey, {localStorage.getItem('name')}</div>;
}
